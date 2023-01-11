const express = require('express');
const route = express.Router()
const homeController = require('./SRC/controller/homecontroller')

function meuMiddleware(req, res, next){
console.log('passei no seu middleware')
next()
}


// rotas da home
route.get('/', meuMiddleware,homeController.paginaInicial);
route.post('/', homeController.trataPost)






module.exports = route