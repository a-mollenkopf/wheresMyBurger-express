// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
 connection = mysql.createConnection(process.env.JAWSDB);
} else {
   connection =  mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "6646023Ava!",
    database: "burgers_db"
  });
};

connection.connect();
module.exports = connection;
