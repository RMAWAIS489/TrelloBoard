import express from "express";
import cors from 'cors';
import userRoutes from './user/userRoutes.js'
import boardRoutes from"./board/boardRoutes.js"
import listRoutes from './list/listRoutes.js'
import cardRoutes from  "./card/cardRoutes.js"
const app=express();
app.use(cors());
app.use(express.json());
app.use("/users",userRoutes);
app.use("/boards",boardRoutes)
app.use("/lists",listRoutes)
app.use("/cards",cardRoutes)
app.listen(5000,()=>{
  console.log("server is running on port 5000")
})