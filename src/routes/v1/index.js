const userController = require('../../controllers/user_cont');

const express = require('express');
const router = express.Router();

router.post('/signup',userController.create);
router.post('/signin',userController.signIn);

module.exports = router;

