import User from '../models/users.model';
import { validationResult } from 'express-validator';
import { Request, Response } from "express";


export const getUsers = async (req: Request, res: Response) => {

  try {
    const users = await User.findAll();

    if (users.length === 0) {
        res.status(404).json({ message: "No users found" });
    } else {
        res.status(200).json(users);
    }

  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).json({ error: "Internal Server Error" });
} 


}

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

export const deleteUser = async (req: Request, res: Response) => {
  
  try {
    const { id } = req.params;
    const errors = validationResult(req);

    //If there are validation errors, respond with a 400 Bad Request status.

    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });

    } else {
        const user = await User.findByPk(id);
        await user!.destroy();
        res.json({
            msg: 'User deleted'
        })
    }

  } catch (error) {
    console.error('Error retrieving id user:', error);
    res.status(500).json({ msg: 'Internal Server Error'})
  }
};


export const postUser = async (req: Request, res: Response) => {
  
  try {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });

    } else {
        const { body } = req;
        await User.create(body);

        res.json({
            msg: 'User added',
            data: body,
        })
    }

  } catch (error) {
    console.error('Error retrieving post user:', error);
    res.status(500).json({ msg: 'Internal Server Error'})

  }
}

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
      const user = await User.findByPk(id);
  
      if(user){
          await user.update(body);
          res.json({
              msg: 'User updated!'
          })
  
      } else {
          res.status(404).json({
              msg: `There is no user with that id ${id}`
          })
      }

  } catch (error){
      console.error('Error retrieving post User:', error);
      res.status(500).json({ msg: 'Internal Server Error'})

  }
 


}