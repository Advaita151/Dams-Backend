// routes/parameterRoutes.js
import express from 'express';
import { getAllParameters } from '../controllers/parameterController.js';

const router = express.Router();

router.get('/', getAllParameters);

export default router;
