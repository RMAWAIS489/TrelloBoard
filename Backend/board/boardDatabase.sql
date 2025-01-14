CREATE TABLE boards (
    id SERIAL PRIMARY KEY,       
    title TEXT NOT NULL,          
    user_id INT NOT NULL,         
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
