var mysql2 = require('mysql2');

var con = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "restaurant",
    port: 3306,
  });
  module.exports = con;