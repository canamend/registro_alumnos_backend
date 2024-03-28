const { dbConnection } = require("../config");

const getStudents = () => {
    return new Promise( (resolve, reject)=>{
        const query = "SELECT * FROM estudiante";
        dbConnection.query(query, (err, result) => {
          if(err) reject(err);
          else resolve(result);
        })
    });
}

module.exports = {
  getStudents,
}