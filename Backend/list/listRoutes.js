import express from 'express';
import { insertList } from './listController.js';


const router= express.Router();

router.post("/",insertList)

export default router;