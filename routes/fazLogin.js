var express = require('express');
var router = express.Router();

var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://login-study-975a8-default-rtdb.firebaseio.com"
});

const db = admin.firestore();

let usersRef = db.collection("Users");

const emails = [];
const senhas = [];

/* POST login. */

router.post('/', function (req, res, next) {
    const { usuario, senha } = req.body;

    usersRef.get().then((querySnapshot) => {

        querySnapshot.forEach(document => {
            emails.push(document.data().email);
            senhas.push(document.data().senha);
        })

        if (emails.includes(usuario)) {
            if (emails.indexOf(usuario) == senhas.indexOf(senha)) {
                console.log("Você entrou!");
                // res.redirect('/homepage');
            } else {
                console.log("Você não entrou.");
            }
        } else {
            console.log("Usuário " + usuario + " não existe. Venha para o Ciné!");
            // res.redirect('/registro');
        }
    })
});

module.exports = router;