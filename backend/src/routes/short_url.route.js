import express from 'express'
const router = express.Router();
import { shortUrlGen } from '../controllers/short_url.controller.js';

router.post ("/", shortUrlGen)

export default router;
