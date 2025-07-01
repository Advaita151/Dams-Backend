import express from 'express';
import { loginUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/login', loginUser); // e.g. POST /api/users/login

export default router;
