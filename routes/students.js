const { Router } = require('express');
const { check, body } = require('express-validator');
const router = Router();

const { validarCampos } = require('../middlewares/validar-campos');

const { studentsGet, 
        studentGet,
        studentUpdate,
        studentPost, 
        studentDelete } = require('../controller/students');
        
const dataValidator = [
  body('nombre', 'El nombre es requerido').exists(),
  body('nombre', 'Longitud inválida, el rango es de 10 a 70 caracteres')
    .isLength({min: 10, max: 70}),
  body('edad','La edad es requerida').exists(),
  body('grupo','El grupo del alumno es requerido').exists(),
  body('promedioGeneral','El promedio del alumno es requerido').exists(),
  validarCampos
];

router.get('/', [], studentsGet);

router.get('/:id', [
  check('id', 'no es un id válido').isNumeric(),
  validarCampos
], studentGet);

router.put('/:id', [
  check('id','no es un id válido').isNumeric(),
  ...dataValidator,
], studentUpdate);

router.post('/', [
  ...dataValidator
], studentPost);

router.delete('/:id', [
  check('id','no es un id válido').isNumeric(),
], studentDelete);


module.exports = router;