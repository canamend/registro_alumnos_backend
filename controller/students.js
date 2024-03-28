const { response, request } = require('express');

const { getStudents, 
        getStudent, 
        postStudent} = require('../database/queries/student.queries');

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

const studentPut = (req, res = response) => {
    res.json({
        msg: 'put API - controlador',
    });
}

const studentPost = async(req = request, res = response, next) => {
    try {
      const { nombre, edad, grupo, promedio_general } = req.body;
      const newStudent = await postStudent( nombre, edad, grupo, promedio_general, activo = true );
      res.json(newStudent)
    } catch (error) {
      next(error);
    }
}

const studentDelete = (req, res = response) => {
    res.json({ 
        msg: 'delete API - controlador'
    });
}

const studentPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controlador'
    });
}

module.exports = {
    studentsGet,
    studentGet,
    studentPut,
    studentPost,
    studentDelete,
    studentPatch,
}