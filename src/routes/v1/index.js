const userController = require('../../controllers/user_cont');

const express = require('express');
const router = express.Router();

router.post('/signup',userController.create);

module.exports = router;

