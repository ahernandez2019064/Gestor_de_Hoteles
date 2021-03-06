'use strict'

var express = require('express');
var usuarioControlador = require('../controladores/usuarioController');

var md_autorizacion = require('../middleware/authentication');

var app = express.Router();

//Rutas Administrador
app.post('/login', usuarioControlador.login);
app.post('/registrarAdmin', md_autorizacion.ensureAuth ,usuarioControlador.registrarAdmin);
app.delete('/eliminarUsuario/:id', md_autorizacion.ensureAuth, usuarioControlador.eliminarUsuario);
app.put('/editarUsuario/:id', md_autorizacion.ensureAuth, usuarioControlador.editarUsuario);
app.put('/ascenderUsuario/:id', md_autorizacion.ensureAuth, usuarioControlador.ascenderUsuario);
app.get('/productosAgotados', md_autorizacion.ensureAuth, usuarioControlador.productosAgotados);

// Rutas Clientes
app.delete('/eliminarCuenta/:id', md_autorizacion.ensureAuth, usuarioControlador.eliminarCuenta);
app.put('/editarCuenta/:id', md_autorizacion.ensureAuth, usuarioControlador.editarCuenta);
app.post('/registrarCliente', usuarioControlador.registrarCliente);
app.put('/agregarAlCarrito/:id', md_autorizacion.ensureAuth, usuarioControlador.agregarProductoCarrito);
app.get('/productoNombre', md_autorizacion.ensureAuth, usuarioControlador.obtenerProductosNombre);
app.get('/productoXCategoria/:id', md_autorizacion.ensureAuth, usuarioControlador.productosXCategoria);
app.post('/generarFactura', md_autorizacion.ensureAuth, usuarioControlador.generarFactura);
app.get('/facturasUsuarios', md_autorizacion.ensureAuth, usuarioControlador.facturasUsuarios);
app.get('/productosFacturas/:id', md_autorizacion.ensureAuth, usuarioControlador.productosFacturas);
app.get('/productosMasVendidos', usuarioControlador.productosMasVendidos);


module.exports = app;