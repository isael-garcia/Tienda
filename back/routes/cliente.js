var express = require('express');
var clienteController = require('../controllers/cliente-controller')

var api = express.Router();

var auth = require('../middlewares/autenticate')

api.post('/registro_clientes', clienteController.registro_cliente);
api.post('/login_cliente', clienteController.login_cliente);

api.get('/listar_clientes_filtro_admin/:tipo/:filtro',auth.auth, clienteController.listar_clientes_filtro_admin);
module.exports = api;