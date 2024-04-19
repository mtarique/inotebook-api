const { body, validationResult } = require('express-validator'); 

const userValidationRule = [
    body('name', "Enter a valid name").isLength({min: 3}), 
    body('email', "Enter a valid email").isEmail(), 
    body('password', "Password must be atleast of 8 characters").isLength({min: 8})
];

const validate = (req, res, next) => {
    const errors = validationResult(req); 

    if(!errors.isEmpty()) {
        return res.status(400).json({status: false, code: 400, message: "Invalid input", errors: errors.array()})
    }

    next();
}

module.exports = {userValidationRule, validate}; 