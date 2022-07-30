const express = require('express');
const db = require('./config')
const cors = require('cors')

// NEED TO RUN IN DATABASE
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'c79916052';

const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json())

// Route to get all posts

let insert = (table, values, keys = null) => {
    return `INSERT INTO ${table} ${keys != null ? `(${keys.join(',')})` : null} VALUES (${values.map(a => `'${a}'`).join(',')})`
}

let select = (table, values, fields, keys) => {

}

app.post("/api/create/users", (req, res) => {

    console.log("req", req);
    console.log("body", req.body);
    let data = req.body;


    let query = insert('users', [data.username, data.password], ['username', 'password'])

    db.query(query, async (err, result) => {
        if(err) {
            console.log(err)
        } else{
            // res.send(result)
            console.log("insertId", result.insertId)

            let query2 = insert('clients', [data.name, data.surname, result.insertId], ['name', 'surname', 'user_id'])
                
            await db.query(query2, (err2, result2) => {
                console.log("Cliente inserido")
            });
            
            let query3 = insert('contacts', [data.email, data.phone, result.insertId], ['email', 'phone', 'user_id'])
            
            await db.query(query3, (err3, result3) => {
                console.log("Contato inserido")
            })
            res.send(result)
        }
        // res.send(result)
        // return redirect('/login');
    });
    // return redirect('/login');
});

app.post("/api/authenticate", (req, res) => {
    
    let data = req.body;
    console.log("data", data)

    let query = `SELECT u.id as user_id, u.username, c.name, c.surname, ct.email FROM users u
        LEFT JOIN clients c on c.user_id = u.id
        LEFT JOIN contacts ct on ct.user_id = u.id
        WHERE u.username = ? AND u.password = ?`

    db.query(query, [data.username, data.password], (err, result) => {
        console.log("result", result)
        // req.session.user = result
        res.json(result);
    })
})

// Route to get one post
app.get("/api/getFromId/:id", (req,res)=>{

    const id = req.params.id;
    db.query("SELECT * FROM posts WHERE id = ?", id, 
        (err,result)=>{
            if(err) {
            console.log(err)
            } 
            res.send(result)
    });
});

app.listen(3002, ()=>{
    console.log(`Server is running on ${3002}`)
})