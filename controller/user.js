const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/user');

const userGet = (req = request, res = response) => {

    const { q, nombre = 'no name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get api - controller',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}
const userPost = async (req, res = response) => {

    const { name, email, pass, role } = req.body;
    const user = new User({ name, email, pass, role });

    //*Verificar si el correo existe
    const existeEmail = await User.findOne({ email });
    if (existeEmail) {
        return res.status(400).json({
            msg: 'El correo ya esta en uso'
        });
    }

    //*Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    user.pass = bcryptjs.hashSync(pass, salt);


    //*Guardar en BD
    await user.save();

    res.json({
        user
    });
}
const userPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put api - controller',
        id
    });
}
const userDelete = (req, res = response) => {
    res.json({
        msg: 'delete api - controller'
    });
}



module.exports = {
    userGet, userPost,
    userPut, userDelete
}