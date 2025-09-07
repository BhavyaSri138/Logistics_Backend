const express = require('express');
const { registerUser, loginUser } = require('../Controllers/auth.controller');
const { googleSignup, googleLogin } = require('../Controllers/auth.controller');

const authRouter = express.Router();

// Local Auth
authRouter.post('/signup', registerUser);
authRouter.post('/login', loginUser);

// Google Auth
authRouter.post('/google-signup', googleSignup);
authRouter.post('/google-login', googleLogin);

module.exports = authRouter;
