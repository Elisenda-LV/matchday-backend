import { check } from 'express-validator';

export const userValidator = [

    check('name')
        .exists()
        .withMessage("Name is required")
        .isString()
        .withMessage("Name should be a string")
        .isLength({ max: 20 })
        .withMessage("The name should be a maximum of 20 characters."),

    check('email')
        .exists()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Provide a valid email"),
        
    check('password')
        .exists()
        .withMessage("Password is required")
        .isString()
        .withMessage("Password should be string")
        .isLength({ min: 5 })
        .withMessage('Password should be a string and at least 5 characters')


]