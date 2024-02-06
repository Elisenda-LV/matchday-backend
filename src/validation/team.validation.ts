import { check } from 'express-validator';

export const teamValidator = [

    check('user_id')
        .exists()
        .withMessage("User is required")
        .isInt()
        .withMessage('User is a integer'),
    
    check('sport_id')
        .exists()
        .withMessage("Sport is required")
        .isInt()
        .withMessage('Sport is a integer'),

    check('team_name')
        .exists()
        .withMessage("Team name is required")
        .isString()
        .withMessage("Team name should be a string")
        .isLength({ min: 5, max: 20 })
        .withMessage("The name should be at least 5 characters and a maximum of 20 characters."),
        check('gender')
        .exists()
        .withMessage("Gender is required")
        .isString()
        .withMessage("Gender should be a string")
        .isLength({ max: 15 })
        .withMessage("Gender should be a maximum of 15 characters."),
    
    check('gender')
        .exists()
        .withMessage("Gender is required")
        .isString()
        .withMessage("Gender should be a string")
        .isLength({ max: 10 })
        .withMessage("Gender should be a maximum of 10 characters."),

    check('category')
        .exists()
        .withMessage("Category is required")
        .isString()
        .withMessage("Category should be a string")
        .isLength({ max: 20 })
        .withMessage("Gender should be a maximum of 20 characters."),

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