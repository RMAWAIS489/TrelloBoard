import express from 'express';
import { insertcard } from './cardController.js';



const router= express.Router();

router.post("/",insertcard)

export default router;