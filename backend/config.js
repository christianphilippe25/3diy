const mysql = require('mysql')
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "c79916052",
database:"3diy" 
})

module.exports = db