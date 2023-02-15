// importing external modules
const { validationResult } = require('express-validator');

// importing models
const User = require('../models/userModel');

// --------- GET ROUTES --------- // 
exports.getUserById = async (req, res, next) => {

    // parse userId
    const userId = req.params.userId;

    try{
        const result = await User.findById(userId);

        if (!result){
            return res.status(404).json(
                {
                    message: "User not found."
                }
            );
        }

        res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

// --------- POST ROUTES --------- // 
exports.postUser = async (req, res, next) => {

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

    try{
        const result = await newUser.save();
        res.status(201).json(result);
    }
    catch (error){
        console.log(error)
        res.status(400).json(error);
    }
};

