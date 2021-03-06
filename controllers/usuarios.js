const {response} = require('express');

const usuariosGet = (req, res = response ) =>{

    const params = req.query
    res.json({
        msg:'get API - controlador',
        params
    });
}

const usuariosPost = (req, res = response ) =>{

    const body = req.body;

    res.json({
        msg:'post API - controlador',
        body,
    });
}

const usuariosPut = (req, res = response ) =>{

    const {id} = req.params;

    res.json({
        msg:'put API - controlador',
        id
    });
}

const usuariosPatch = (req, res = response ) =>{
    res.json({
        msg:'patch API - controlador'
    });
}

const usuariosDelete = (req, res = response ) =>{
    res.json({
        msg:'delete API - controlador'
    });
}




module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}