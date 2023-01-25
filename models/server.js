
const express = require('express');
const cors = require('cors');
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.middlewares();

        this.routes();
    }

    middlewares() {

        //* CORS
        this.app.use(cors());
        //* LECTURA Y PARSEO
        this.app.use(express.json());
        //* DIRECTORIO PUBLICO
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use('/api/user', require('../routes/user'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo ', this.port);
        });
    }
}

module.exports = Server;