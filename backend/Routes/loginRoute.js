import express from 'express';

const router = express.Router();
const authController = require('./controllers/loginController');

router.post('/login', authController.loginUser);

module.exports = router;
