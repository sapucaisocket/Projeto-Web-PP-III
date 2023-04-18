var express = require('express');
var router = express.Router();
var admin = require("firebase-admin");

const db = admin.firestore(); // Referência do DB
let col = db.collection("Users"); // Referência da coleção de usuários

var usuarios = [];

/* POST registro. */

router.post('/', function (req, res, next) {
    const { usuario, senha } = req.body;

    col.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            usuarios.push(data.email);
        });
        if (usuarios.includes(usuario)) {
            res.redirect('/registro')
            usuarios = [];
        } else {
            db.collection("Users").doc(usuario).set({
                email: usuario,
                senha: senha,
            })
                .then(() => {
                    console.log("Usuário registrado! Por favor, faça login.");
                    res.redirect('/login')
                })
                .catch((error) => {
                    console.error("Não foi possível concluir o registro por conta do seguinte erro: ", error);
                });
            usuarios = [];
        }
    });
});

module.exports = router;