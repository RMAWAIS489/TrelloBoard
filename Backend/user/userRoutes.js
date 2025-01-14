import express from 'express'
import { inserdata } from './userController.js';

const router = express.Router();

router.post("/",inserdata)
export default router;