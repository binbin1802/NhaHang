var mysql2 = require('mysql2');
var fs = require('fs');
var con = mysql2.createConnection({
    host: "db-mysql-sgp1-61953-do-user-11540050-0.b.db.ondigitalocean.com",
    user: "doadmin",
    password: "AVNS_k2wCGurPGrtMcTH",
    database: "restaurant",
    port: 25060,
    ssl  : {
        ca : fs.readFileSync(__dirname +  '/ca-certificate.crt')
      }
  });

  module.exports = con;