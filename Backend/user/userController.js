import { connection } from "../database/db.js";
import bcrypt from 'bcrypt';


export const inserdata= (async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newuser = await connection.query(
            "INSERT INTO users(name, email, password) VALUES ($1, $2, $3) RETURNING *",
            [name, email, hashedPassword]
        )
        res.status(201).json({ message: "User created successfully", user: newuser.rows[0] });
    } catch (error) {
        console.error("Error inserting data:", error);
        res.status(500).json({ error: "Failed to create user" });
    }
});