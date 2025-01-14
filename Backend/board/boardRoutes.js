import express from 'express';
import { getBoard, insertBoard } from './boardController.js';

const router = express.Router();


router.post("/",insertBoard)
router.get("/boards",getBoard)

export default router;




