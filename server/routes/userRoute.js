import express from 'express';
import { createProduct } from '../controller/productController.js';
import { auth } from '../middleware/auth.js';
import { checkRole } from '../middleware/checkRole.js';

const router = express.Router();

router.post('/create', auth, checkRole(['seller', 'admin']), createProduct);

export default router;
