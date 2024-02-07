import { check } from 'express-validator';


export const playerValidator = [

    check('nif')
        .exists()
        .withMessage("NIF is required")
        .isString()
        .withMessage("NIF should be a string")
        .isLength({ min: 9, max: 9 })
        .withMessage("NIF should be a maximum of 9 characters."),

    check('name')
        .exists()
        .withMessage("Name is required")
        .isString()
        .withMessage("Name should be a string")
        .isLength({ max: 20 })
        .withMessage("The name should be a maximum of 20 characters."),

    check('surname')
        .exists()
        .withMessage("Surname is required")
        .isString()
        .withMessage("Surname should be a string")
        .isLength({ max: 40 })
        .withMessage("The name should be a maximum of 40 characters."),

    check('born_date')
        .exists()
        .withMessage("Born date is required")
        .isDate()
        .withMessage("Born date should be a date with format (YYYY-MM-DD)")
]