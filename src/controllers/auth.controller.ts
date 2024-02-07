// auth.controllers implements user functions such as register, login, forgot password, change password and log out.

import bcrypt from 'bcrypt';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
import { validationResult } from 'express-validator';
import { Request, Response } from "express";

import User from '../models/users.model';
import RecoveryToken from '../models/recovery-token.model';
import sendEmail from "../utils/email/send-email";


const clientURL = process.env.CLIENT_URL;


export const register = async (req: Request, res: Response) => {

    try {
        const errors = validationResult(req);

        // If there are validation errors, respond with a 400 Bad Request status.
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        
        // Check if a user with the same email already exists.
        const { email, password, name, id_user } = req.body;
        const existingUser = await User.findOne({ where: { email: email } });

        if (existingUser) {
            return res.status(400).json({
                code: -2,
                message: 'A user with the same email already exists.'
            });
        }

        // Add a new user.
        const hashedPassword = await bcrypt.hash(password, 10);
       
        const newUser = await User.create({
            id_user,
            name,
            email,
            password: hashedPassword,
            role: '1', 
            create_at: new Date(),
          });

        await newUser.save();

        // Generate an access token and store it in a secure (httpOnly) token
        const accessToken = jwt.sign({ id_user: newUser.id_user }, process.env.JWT_SECRET as jwt.Secret);
        const token = serialize('token', accessToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: 60 * 60 * 24 * 30,
          path: '/',
        });

        res.setHeader('Set-Cookie', token);

        res.status(200).json({
        code: 1,
        message: 'Register done!',
      });

        
    } catch (error) {
        console.error(error);
        res.status(500).json({
          code: -100,
          message: 'Internal Server Error',
          error: error,
        });
    }

};


export const login = async (req: Request, res: Response) => {

    try {
        const errors = validationResult(req);

        // If there are validation errors, respond with a 400 Bad Request status.
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        
        const { email, password } = req.body;

        // Verify if the email and password are ok
        const user = await User.findOne({ where: { email: email } });
        if (!user) {
            return res.status(401).json({
            code: -25,
            message: 'Email does not exist'
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
            code: -5,
            message: 'Invalid Password'
        });
        }

        // Generate an access token and store it in a secure (httpOnly) token
        const accessToken = jwt.sign({ userId: user.id_user }, process.env.JWT_SECRET as jwt.Secret);
        const token = serialize('token', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 30,
            path: '/',
        });

        res.setHeader('Set-Cookie', token);

      // Send a response to the client
        res.status(200).json({
            code: 1,
            message: 'Login OK',
            data: {
                user: {
                    name: user.name,
                    email: user.email
                } 
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            code: -100,
            message: 'An error occurred while logging in',
            error: error
        });
    }

};

export const forgotPassword = async (req: Request, res: Response) => {

    try {

        const { email } = req.body;

        // Verify if the email and password are ok
        const user = await User.findOne({ where: { email: email } });
        if (!user) {
            return res.status(401).json({
            code: -25,
            message: 'Email does not exist'
            });
        }

        let resetToken = crypto.randomBytes(32).toString("hex");
        const hash = await bcrypt.hash(resetToken, Number(process.env.BCRYPT_SALT));

        const recoveryTokenInstance = await RecoveryToken.create({
            userId: user.id_user,
            token: hash,
            expiresAt: new Date(),
        });

        const link = `${clientURL}/change-password?token=${resetToken}&id=${user.id_user}`;

        // Send an email password reset request

        await sendEmail(
            user.email,
            "Password Reset Request",
            {
              name: user.name,
              link: link,
            },
            "email/template/request-reset-pws.handlebars"
          ).then(response => {
            console.log("Show email result:", response);
            res.status(200).json({
              code: 100,
              message: 'Send Email OK',
              data: {
                link: link
              }
            });
      
            },error => {
            console.error (error)
            res.status(200).json({
              code: -80,
              message: 'Send Email KO',
              data: {error}
            });
          })
      
         return true;
    
    } catch (error) {
        console.error(error);
        res.status(500).json({
            code: -100,
            message: 'There was an error updating the password',
            error: error
        });
    }

};

export const changePassword = async (req: Request, res: Response) => {

    try {
        const { token, password, email } = req.body;

        // Check if token exists:
        let token_row = await token.findOne({ where: { token: token }});
        if (token_row) {
            await token_row.deleteOne();
            return res.status(404).json({
                code: -3,
                message: 'Token Invalid'
            });
        }

        // Find user by Id: 
        const user = await User.findByPk(token_row.userId );
        if (!user) {
            return res.status(404).json({
                code: -10,
                message: 'Usuario no encontrado'
            });
        }

        // Update email and password:
        if (email) user.email = email;
        if (password) user.password = await bcrypt.hash(password, 10);
        await user.save();

    
        res.status(200).json({
            code: 1,
            message: 'User Detail',
            data: user
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            code: -100,
            message: 'There was an error updating the password',
            error: error
        });
    }

};

export const logout = async (req: Request, res: Response) => {

    const { cookies } = req;
    const jwt = cookies.token;

    const token = serialize('token', '' , {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: -1,
        path: '/',
    });

    res.setHeader('Set-Cookie', token);
    res.status(200).json({
        code: 0,
        message: 'Logged out - Delete Token',
    });

}