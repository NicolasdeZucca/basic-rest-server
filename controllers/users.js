const { request, response } = require('express');
const Usuario = require('../models/user')

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

    const body = req.body;

    const user = new Usuario(body);
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