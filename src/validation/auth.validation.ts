import { check } from 'express-validator';


const emailErrorMessage = "Provide a valid email";
const passwordErrorMessage = "Password should be a string and at least 5 characters";
const basicPasswordErrorMessage = "This password is too basic";


export const loginValidator = [

    check("email").isEmail().withMessage(emailErrorMessage),
    check("password")
        .exists()
        .withMessage("Password is required")
        .isString()
        .withMessage("Password should be string")
        .isLength({ min: 5 })
        .withMessage(passwordErrorMessage)
]

export const registerValidator = [

    check("email").isEmail(),
    check("password")
        .exists()
        .withMessage("Password is required")
        .isString()
        .withMessage("Password should be string")
        .isLength({ min: 5 })
        .withMessage(passwordErrorMessage)
        .custom(value => {
            if (value == '123456') {
                throw new Error(basicPasswordErrorMessage);
            }
            return true;
        }),
    check("name").isString(),
    check("surname").isString()
]

export const forgotPasswordValidator = [

    check("email").isEmail()
];

export const changePasswordValidator = [

    check("token")
        .exists(),
    check("password")
        .exists()
        .withMessage("Password is required")
        .isString()
        .withMessage("Password should be string")
        .isLength({ min: 5 })
        .withMessage(passwordErrorMessage)
        
];