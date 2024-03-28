const { dbConnection } = require("../config");

const getStudents = () => {
    return new Promise( (resolve, reject)=>{
        const query = "SELECT * FROM estudiante WHERE activo IS true";
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

const postStudent = ( ...studentData ) => {
  return new Promise( (resolve, reject) => {
    const query = "INSERT INTO estudiante (nombre, edad, grupo, promedio_general, activo) VALUES(?,?,?,?,?)";
    dbConnection.query(query, studentData, (err) =>{
      if(err) reject(err);
      else resolve('Registro guardado correctamente');
    })
  });
}

module.exports = {
  getStudents,
  getStudent,
  postStudent
}