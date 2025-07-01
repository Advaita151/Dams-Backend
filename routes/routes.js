// routes/routes.js
import express from 'express';
import parameterRoutes from './parameterRoutes.js';
import userRoutes from './userRoutes.js'; 

const router = express.Router();

// Grouped routes
router.use('/api/parameters', parameterRoutes);
router.use('/api/users', userRoutes);

export default router;
