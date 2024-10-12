import { check } from 'express-validator';


export const leagueValidator = [

    check('user_id')
        .exists()
        .withMessage("User is required")
        .isInt()
        .withMessage('User is a integer'),

    check('league_name')
        .exists()
        .withMessage("Name is required")
        .isString()
        .withMessage("Name should be a string")
        .isLength({ min: 5, max: 30 })
        .withMessage("The name should be at least 5 characters and a maximum of 30 characters."),

    check('gender')
        .exists()
        .withMessage("Gender is required")
        .isString()
        .withMessage("Gender should be a string")
        .isLength({ max: 15 })
        .withMessage("Gender should be a maximum of 15 characters."),

    check('category')
        .exists()
        .withMessage("Category is required")
        .isString()
        .withMessage("Category should be a string")
        .isLength({ max: 10 })
        .withMessage("Gender should be a maximum of 10 characters."),

    check('description')
        .exists()
        .withMessage("Description is required")
        .isString()
        .withMessage("Description should be a string")
        .isLength({ max: 140 })
        .withMessage("Description should be a maximum of 140 characters."),

    check('location')
        .exists()
        .withMessage("Location is required")
        .isString()
        .withMessage("Location should be a string")
        .isLength({ max: 20 })
        .withMessage("Location should be a maximum of 20 characters."),

        
]