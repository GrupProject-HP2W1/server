"use strict"
const userController = require('../controller/userWeatherController')
const Router = require('express').Router()

Router
    .post('/register', userController.register)
    .post('/login', userController.login)
    .post('/registerGoogle', userController.loginGoogle)

module.exports = Router