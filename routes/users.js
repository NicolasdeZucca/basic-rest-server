const { Router } = require('express')
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/valid-fields')
const { getUsers, putUsers, postUsers, deleteUsers, patchUsers } = require('../controllers/users');


const router = Router();

router.get('/', getUsers);

router.post('/', 
    [check('nombre', 'name field is required').not().isEmpty(),
    check('correo', 'correo not valid').isEmail(),
    check('role', 'invalid role').isIn(["ADMIN_ROLE", "USER_ROLE"]),
    check('password', 'password must be contain at least 6 letters').isLength({min: 6}),
    validarCampos
], postUsers);

router.put('/:id', putUsers);

router.patch('/', patchUsers);

router.delete('/', deleteUsers);


module.exports = router;