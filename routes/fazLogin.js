var express = require('express');
var router = express.Router();

/* POST login. */
router.post('/', function(req, res, next) {
    const { usuario, senha } = req.body;
    console.log("Usuário: " + usuario);
    console.log("Senha: " + senha);
});

module.exports = router;
