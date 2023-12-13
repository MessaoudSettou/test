const express = require('express');
const UserController = require('../Controllers/Users');
const auth = require('../Controllers/Auth');
const userRouter = express.Router();

userRouter.use(express.json());


userRouter.get('/', UserController.getAllUsers);
userRouter.get('/:id', UserController.getUserById);
userRouter.post('/signUp', auth.signup);
userRouter.post('/login' , auth.login)


module.exports = userRouter;
