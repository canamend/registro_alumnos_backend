const { Router } = require('express');
const router = Router();

const { studentsGet, 
        studentsPatch, 
        studentsPut, 
        studentsPost, 
        studentsDelete } = require('../controller/students');

router.get('/', studentsGet);

router.put('/:id', studentsPut);

router.post('/', studentsPost);

router.delete('/', studentsDelete);

router.patch('/', studentsPatch);


module.exports = router;