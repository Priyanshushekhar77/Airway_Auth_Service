const userController = require('../../controllers/user_cont');
const {authRquestValidator} = require('../../middlewares/index')

const express = require('express');
const router = express.Router();

router.post('/signup',
authRquestValidator.validateUsersAuth,
userController.create);
router.post('/signin',
authRquestValidator.validateUsersAuth,
userController.signIn);

router.get('/isAuthenticated',userController.isAuthenticated)

router.get('/isAdmin',authRquestValidator.roleVerification,userController.isAdmin)
router.get('/isCustomer',authRquestValidator.roleVerification,userController.isCustomer)

module.exports = router;

