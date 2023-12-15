const express = require('express'); // para makabuhat  og endpoints/routes
const mysql = require('mysql');
const cors = require('cors');  // para maka gamit sa lain2 nga ports or domains 


const app = express();
app.use(cors());  
app.use(express.json());

const db = mysql.createConnection({


    host: 'localhost',  
    user: 'root',
    password: 'NewPassword', // mao ni password sa akong database
    database: 'test',   // name sa database
})

 //End-point sa root path 
app.get("/", (req , res) => {


    res.json("hello this is the backend");
})

// Endpoint  sa pag get sa tanan nga libro
app.get("/books", (req, res)=>{
    const q = "SELECT * from books";
    db.query(q,(err, data)=>{

         if(err) return res.json(err)
         return res.json(data)
    })
     
});


// Endpoint sa pag-delete og libro 
app.delete("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?";

    db.query(q, [bookId], (err, data) => {
        if (err) return res.json(err);   // if naay error sa pag-query, i-return ni nga error.
        return res.json("Book has been deleted successfully!");   
    });
});


     

app.post("/books", (req, res) => {  
                                   //placeholders sa mga values
    const q = "INSERT INTO books (title, `desc`, price, cover) VALUES (?, ?, ?, ?)"; 
    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover,
    ];

    db.query(q, values, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error', details: err.message });
        }
        return res.json("Book has been created successfully");
    });
});



// Mo console log ragud siya ani nga message if na activate ang port 
app.listen(3001, () => {


     console.log("connected to backend");
})


app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    // Check if username and password are provided
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }
  
    // Check user in the database using parameterized query
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(query, [username, password], (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Internal server error' });
      }
  
      if (results.length === 0) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      res.status(200).json({ message: 'Login successful' });
    });
  });