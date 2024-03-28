const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { validarCampos } = require('../middlewares/validar-campos');

const { studentsGet, 
        studentGet,
        studentPatch, 
        studentPut,
        studentPost, 
        studentDelete } = require('../controller/students');

router.get('/', [], studentsGet);

router.get('/:id', [
  check('id', 'no es un id válido').isNumeric(),
  validarCampos
], studentGet);

router.put('/:id', studentPut);

router.post('/', studentPost);

router.delete('/:id', studentDelete);

router.patch('/:id', studentPatch);


module.exports = router;