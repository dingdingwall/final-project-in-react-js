const express = require('express');
const mysql = require('mysql');
const cors = require('cors');



const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({


    host: 'localhost',
    user: 'root',
    password: 'NewPassword',
    database: 'test',
})


app.get("/", (req , res) => {


    res.json("hello this is the backend");
})


app.get("/books", (req, res)=>{
    const q = "SELECT * from books";
    db.query(q,(err, data)=>{

         if(err) return res.json(err)
         return res.json(data)
    })
     
});


app.post("/books", (req, res) => {
    const q = "INSERT INTO books (title, `desc`, cover) VALUES (?, ?, ?)";
    const values = [ req.body.title,
        req.body.desc,
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




app.listen(3001, () => {


     console.log("connected to backend");
})