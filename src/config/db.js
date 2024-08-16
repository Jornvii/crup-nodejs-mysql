const mysql = require("mysql2/promise");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "role_api",
    port: 3306,
    namedPlaceholders: true
});

// Test the connection
(async () => {
    try {
        const connection = await db.getConnection();
        console.log('Database connected successfully');
        connection.release(); 
    } catch (err) {
        console.error('Database connection failed:', err);
    }
})();

module.exports = {
    db};



// const mysql= require("mysql2/promise");
// const db =mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "role_api",
//     port:3306,
//     namedPlaceholders: true

// })
// module.exports={db};