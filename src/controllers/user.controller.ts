import User from "../models/users.model";
import { validationResult } from 'express-validator';
import { Request, Response } from "express";


export const getUserById = async (req: Request, res: Response) => {

    try {

      const { id } = req.params;
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array(), msg: `There is no user with that id ${id}` });

      } else {
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ message: 'User Not Found' });

        } else {
          res.status(200).json({ message: 'User Detail', data: user });

        }

      }

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while obtaining the USER' });
    }

};