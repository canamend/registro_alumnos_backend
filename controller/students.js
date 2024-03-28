const { response, request } = require('express');

const { getStudents, 
        getStudent, 
        postStudent,
        putStudent,
        deleteStudent} = require('../database/queries/student.queries');

const studentsGet = async(req = request, res = response) => {
  try{
    const students = await getStudents();
    res.json(students);
  }catch(error){
      next(error);
  }
}

const studentGet = async(req = request, res = response, next) => {
  try {
    const { id = 0 } = req.params;
    const student = await getStudent(id);
    res.json(student);
  }catch(error){
    next(error);
  }
}

const studentUpdate = async(req = request, res = response, next) => {
  try {
    const { id } = req.params;
    const { nombre, edad, grupo, promedio_general } = req.body;
    const updatedStudent = await putStudent( nombre, 
                                             edad, 
                                             grupo, 
                                             promedio_general, 
                                             id );
    res.json(updatedStudent);
  } catch (error) {
    next(error);
  }
}

const studentPost = async(req = request, res = response, next) => {
    try {
      const { nombre, edad, grupo, promedio_general } = req.body;
      const newStudent = await postStudent( nombre, 
                                            edad, 
                                            grupo, 
                                            promedio_general, 
                                            activo = true );
      res.json(newStudent)
    } catch (error) {
      next(error);
    }
}

const studentDelete = async(req = request, res = response, next) => {
  try {
    const { id } = req.params;
    const deletedStudent = await deleteStudent( id );
    res.json(deletedStudent);
  } catch (error) {
    next(error);
  }
}


module.exports = {
    studentsGet,
    studentGet,
    studentUpdate,
    studentPost,
    studentDelete,
}