const { response, request } = require('express');

const { getStudents } = require('../database/queries/student.queries');

const studentsGet = async(req = request, res = response) => {
  try{
    const students = await getStudents();
    res.json(students);
  }catch(error){
      res.status(500).json({
        msg: error
      });
  }
}

const studentGet = (req, res = response) => {
  res.json({
      msg: 'get API - controlador',
  });
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