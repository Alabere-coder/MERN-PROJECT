const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const registerTemplateCopy = require('../models/registerModels')


router.post('/register', (req, res) => {
    const registeredUser = new registerTemplateCopy({
        fullname: request.body.fullname,
        username: request.body.username,
        email: request.body.email,
        passworf: request.body.passworf
    })
    registeredUser.save()
        .then(data => {
            Response.json(data)
        })
        .catch(error => {
            response.json(error)
        })
})

module.exports = router;