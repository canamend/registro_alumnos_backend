const { Router } = require('express');
const router = Router();

const { studentsGet, 
        studentGet,
        studentPatch, 
        studentPut,
        studentPost, 
        studentDelete } = require('../controller/students');

router.get('/', [], studentsGet);

router.get('/:id', studentGet)

router.put('/:id', studentPut);

router.post('/', studentPost);

router.delete('/:id', studentDelete);

router.patch('/:id', studentPatch);


module.exports = router;