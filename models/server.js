const express = require("express")
const cors = require('cors')
const users = require('../routes/users')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.usersPath = '/api/users'

        //Middlewares
        this.middlewares()

        //Routes
        this.routes()
    }

    middlewares() {
        //Cors
        this.app.use(cors())

        //body parser
        this.app.use(express.json());

        //public directory
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.usersPath, users);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando en el puerto: ${ this.port }`)
        })
    }

}



module.exports = Server