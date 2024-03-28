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

const getStudent = (id) => {
  return new Promise( (resolve, reject) => {
    const query = "SELECT * FROM estudiante WHERE id=?";
    dbConnection.query(query, [id], (err, result) => {
      if(err) reject(err);
      else resolve(result);
    })
  });
}

module.exports = {
  getStudents,
  getStudent,
}