// importing external modules
const express = require('express');
const { body } = require('express-validator');

// importing controllers
const userController = require('../controllers/userController');

// creating  router object
const router = express.Router();

// --------- GET ROUTES --------- // 

// GET /users/get-user-by-id
router.get('/get-user-by-id/:userId', userController.getUserById);

// --------- POST ROUTES --------- // 

// POST /users/post
router.post(
    '/post',
    body('email').isEmail(), // validates email
    body('userName').isLength({min: 4, max: 30}), // defines min and max length for username
    body('password').isLength({min: 6, max: 20}), // defines min and max length for password
    userController.postUser
);

// --------- DELETE ROUTES --------- // 

module.exports = router;