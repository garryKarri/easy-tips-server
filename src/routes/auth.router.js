const { Router } = require('express');
const authController = require('../controllers/auth.controller');


const authRouter = Router();

// /auth/
authRouter.post('/signup', authController.signUp);
authRouter.post('/signin', authController.signIn);
authRouter.get('/signout', authController.signOut);
authRouter.get('/check', authController.checkAuth);

module.exports = authRouter;
