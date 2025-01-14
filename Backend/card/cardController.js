import { connection } from "../database/db.js";


export const insertcard=(async(req,res)=>{
    try {
        const {title,description,user_id,board_id,list_id}=req.body;
         const newcard= await connection.query("INSERT INTO cards (title,description,user_id,board_id,list_id) VALUES ($1,$2,$3,$4,$5) ",[title,description,user_id,board_id,list_id])
         res.status(201).json({ message:"card Created Successfully" ,   card :newcard.rows[0]});
    } catch (error) {
        console.error("Error inserting card Details:", error);
        res.status(500).json({ error: "Failed to create card " });
    }
})