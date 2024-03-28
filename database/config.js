const mysql = require('mysql');

const connectionConfig = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
};

const dbConnection = mysql.createConnection( connectionConfig );

dbConnection.connect( function(err) {
  if (err) throw err;
  console.log('Conexión a base de datos establecida');
});

module.exports = { dbConnection }