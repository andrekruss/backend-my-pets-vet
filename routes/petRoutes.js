// importing external modules
const express = require('express');

// importing controllers
const petController = require('../controllers/petController');

// creating  router object
const router = express.Router();

// --------- GET ROUTES --------- // 

// --------- POST ROUTES --------- // 

// /pets/post
router.post('/post', petController.postPet);

// --------- DELETE ROUTES --------- // 

module.exports = router;