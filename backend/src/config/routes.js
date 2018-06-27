const express = require('express')

module.exports = function(server){

    //API routers

    const router = express.Router()
        server.use('/api',router)

        //Todo routers
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')    
}