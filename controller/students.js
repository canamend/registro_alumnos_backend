const { response } = require('express');


const studentsGet = (req, res) => {
    res.json({
        msg: 'get API - controlador'
    });
}

const studentsPut = (req, res = response) => {
    res.json({
        msg: 'put API - controlador',
    });
}

const studentsPost = (req, res = response) => {
    res.json({
        msg: 'post API - controlador',
    });
}

const studentsDelete = (req, res = response) => {
    res.json({ 
        msg: 'delete API - controlador'
    });
}

const studentsPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controlador'
    });
}

module.exports = {
    studentsGet,
    studentsPut,
    studentsPost,
    studentsDelete,
    studentsPatch,
}