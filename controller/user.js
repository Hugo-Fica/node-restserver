const { response, request } = require('express');



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
const userPost = (req, res = response) => {
    const body = req.body;

    res.json({
        msg: 'post api - controller',
        body
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