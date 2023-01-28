

const { Router } = require('express');
const { check } = require('express-validator');
const { userGet, userPost, userPut, userDelete } = require('../controller/user');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();


router.get('/', userGet);
router.post('/', [
    check('name', 'El nombre no es requerido').not().isEmpty(),
    check('pass', 'La contraseñas es obligatoria, y debe contener más de 6 caracteres').isLength({ min: 6 }),
    check('email', 'El correo no es válido').isEmail(),
    check('role', 'No es un rol permitido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    validarCampos
], userPost);
router.put('/:id', userPut);
router.delete('/', userDelete);

module.exports = router;

