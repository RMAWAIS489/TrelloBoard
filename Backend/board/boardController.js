import { connection } from "../database/db.js";

 export const insertBoard=(async(req,res)=>{
     try {
        const {title,user_id}= req.body;
        const newboard= await connection.query("INSERT INTO boards (title,user_id) VALUES ($1,$2)  RETURNING *",[title,user_id])
        res.status(201).json({ message:"Board Title Created Successfully" ,   board :newboard.rows[0]});
     } catch (error) {
        console.error("Error inserting Board Title:", error);
        res.status(500).json({ error: "Failed to create Board Title" });
     }
})

export const getBoard=(async(req,res)=>{
try {
       
     const getTitle= await connection.query("SELECT id, title, user_id FROM boards");
     res.status(200).json({message:"got all details" , board:getTitle.rows});
    
} catch (error) {
    console.error("Error Fetching data:", error);
        res.status(500).json({ error: "Failed to fetch Board data" });
}

})


