const { request, response } = require('express');

const getUsers = (req, res) => {
    res.json({
        msg: "Get API - controller"
    })
}

const postUsers = (req, res) => {
    res.json({
        msg: "Post API - controller"
    })
}

const putUsers = (req, res) => {
    res.json({
        msg: "Put API - controller"
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