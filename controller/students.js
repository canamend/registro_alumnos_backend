const { response, request } = require('express');

const { getStudents, 
        getStudent } = require('../database/queries/student.queries');

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

const studentPost = (req, res = response) => {
    res.json({
        msg: 'post API - controlador',
    });
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