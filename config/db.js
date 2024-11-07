const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root", // Menyesuaikan nama user pada database
    password: "", // Menyesuaikan passowrd pada database
    database: "toko", // Menyesuaikan nama database yang ingin dibuat
})

db.connect((err) => {
    if (err) {
        console.error ("Database connection failed", err.stack);
        return;
    }
    console.log("Connected to MySQL database");
});

module.exports = db;