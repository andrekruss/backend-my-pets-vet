// importing models
const { validationResult } = require('express-validator');
const User = require('../models/userModel');

// --------- POST ROUTES --------- // 
exports.postUser = (req, res, next) => {

    // verify for validation errors
    const errors = validationResult(req);

    if (!errors.isEmpty()){
        return res.status(400).json(
            {
                errors: errors.array()
            }
        )
    }

    const newUser = new User(
        {
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
            isActive: req.body.isActive,
            userType: req.body.userType
        }
    );

    res.status(201).json(newUser);
};