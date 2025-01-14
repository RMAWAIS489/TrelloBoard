import { connection } from "../database/db.js";


export const insertList=(async(req,res)=>{
    try {
        const {title,description,user_id,board_id}=req.body;
         const newlist= await connection.query("INSERT INTO lists (title,description,user_id,board_id) VALUES ($1,$2,$3,$4) ",[title,description,user_id,board_id])
         res.status(201).json({ message:"list Created Successfully" ,   list :newlist.rows[0]});
    } catch (error) {
        console.error("Error inserting list Details:", error);
        res.status(500).json({ error: "Failed to create list " });
    }
})