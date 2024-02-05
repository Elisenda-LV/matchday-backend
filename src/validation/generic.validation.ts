import { check } from 'express-validator';

export const idValidator = [

    check('id')
        .isInt().withMessage('ID must be an integer')
        .custom((value) => {
            const mariadbIdRegex = /^[0-9]+$/;
            if (!mariadbIdRegex.test(value)) {
                throw new Error('Invalid MariaDB ID format');
            }
            return true;
        })
        
]