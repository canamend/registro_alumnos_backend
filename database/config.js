var mysql = require('mysql');

var con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Conexión con base de datos realizada");
});