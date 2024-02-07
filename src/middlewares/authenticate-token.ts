import jwt, { Secret, JwtPayload }  from 'jsonwebtoken';
import User from '../models/users.model';
import { NextFunction, Request, Response } from 'express';


const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { cookies } = req;
        const accesToken = cookies.token;

        if (!accesToken) {
            return res.status(401).json ({
                msg: 'No access token has been provided.'
            })
        }

        const decodedToken = jwt.verify(accesToken, process.env.JWT_SECRET as jwt.Secret) as JwtPayload;
        const user = await User.findByPk(decodedToken.user_id);
            if (!user) {
                return res.status(401).json({
                    code: -70,
                    message: 'Invalid Token'
                })
            }
        
        //req.user = user;
        next();

      

    } catch (error) {
        console.error(error);
        res.status(500).json({
            code: -100,
            message: '"Internal Server Error.'
        });
    }
}   

export default authenticateToken;