import { Router } from 'express';
import { createEnquiry } from '../controllers/contactController.js';

const router = Router();

router.post('/', createEnquiry);

export default router;
