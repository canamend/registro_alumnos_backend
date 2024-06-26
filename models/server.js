const express = require('express');
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 8080;
        this.studentsPath = '/api/students';

        //Middlewares
        this.middlewares();

        //Rutas de la aplicación
        this.routes();
    }

    middlewares() {
        
        // CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use( express.json() );
        
        //Directorio público
        this.app.use( express.static('public') );
        
    }

    routes() {
        this.app.use(this.studentsPath, require('../routes/students'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`)
        })
    }

}

module.exports = Server;