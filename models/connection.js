const mysql = require('mysql');


// const host="localhost";
// const port=8080;
// const user="root";
// const password="Honeyberry";
// const database="MATCHA";
// const socketPath = "/goinfre/tmkhwana/Desktop/MAMP/mysql/tmp/mysql.sock";
var conn = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    // socketPath: "/goinfre/tmkhwana/Desktop/XAMP/mysql/tmp/mysql.sock",
    database: "MATCHA"
    // socketPath: socketPath
});

conn.connect((err) => { 
    if (err) throw err;
    console.log("database connected");
});

module.exports = conn;