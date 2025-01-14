CREATE TABLE cards(
    id  SERIAL PRIMARY KEY,
    title TEXT NOT NULL, 
    description TEXT NOT NULL,         
    user_id INT NOT NULL,         
     board_id INT NOT NULL,  
     list_id INT NOT NULL,       
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (board_id) REFERENCES boards(id) ON DELETE CASCADE,
     FOREIGN KEY (list_id) REFERENCES lists(id) ON DELETE CASCADE
);