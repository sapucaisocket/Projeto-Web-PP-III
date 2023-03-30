var express = require('express');
var router = express.Router();

var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://login-study-975a8-default-rtdb.firebaseio.com"
});

/* POST login. */
router.post('/', function(req, res, next) {
    const { usuario, senha } = req.body;
    console.log("Usuário: " + usuario);
    console.log("Senha: " + senha);
});

module.exports = router;