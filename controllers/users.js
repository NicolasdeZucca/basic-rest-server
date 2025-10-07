const { request, response } = require('express');
const bcrypt = require('bcryptjs')
const Usuario = require('../models/user');

const getUsers = (req, res) => {

    const {q, nombre, key} = req.query
    res.json({
        msg: "Get API - controller",
        q, 
        nombre, 
        key
    })
}

const postUsers = async (req, res) => {

    const {nombre, correo, password, role} = req.body;

    const user = new Usuario({nombre, correo, password, role});

    const existeEmail = await Usuario.findOne({correo});
    if (existeEmail) {
        return res.status(400).json({
            msg: "Email already registered"
        })
    }

    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt)

    await user.save()

    res.json({
        msg: "Post API - controller",
        user
    })
}

const putUsers = (req, res) => {

    const {id} = req.params
    console.log(id)

    res.json({
        msg: "Put API - controller",
        id
    })
}

const patchUsers = (req, res) => {
    res.json({
        msg: "Patch API - controller"
    })
}

const deleteUsers = (req, res) => {
    res.json({
        msg: "Delete API - controller"
    })
}







module.exports = {
    getUsers,
    postUsers,
    putUsers,
    patchUsers,
    deleteUsers,
}