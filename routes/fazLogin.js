var express = require('express');
var router = express.Router();

var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://login-study-975a8-default-rtdb.firebaseio.com"
});

const db = admin.firestore(); // Referência do DB

let usersRef = db.collection("Users"); // Referência da coleção de usuários

var lsUsuarios = [];

/* POST login. */

router.post('/', function (req, res, next) {
	const { usuario, senha } = req.body;

	usersRef.get().then((querySnapshot) => {

		querySnapshot.forEach((doc) => {
			const data = doc.data();
			lsUsuarios.push({ email: data.email, senha: data.senha });
		});

		const targetPerson = { email: usuario, senha: senha };
		const nameToCheck = usuario;
		console.log(lsUsuarios);

		const nameExists = lsUsuarios.some(person => person.email === nameToCheck);
		const foundPerson = lsUsuarios.find(person => person.email === targetPerson.email && person.senha === targetPerson.senha);
		
		if (nameExists) {
			if (foundPerson) {
				console.log("Você entrou!");
				res.redirect('/');
				lsUsuarios = []
				//console.log("Found the person:", foundPerson);
			} else {
				console.log("Você não entrou!");
				res.redirect('/login');
				lsUsuarios = []
				//console.log("Could not find the person.");
			}
		} else {
			res.redirect('/registro');
			lsUsuarios = []
			console.log(`Usuário '${nameToCheck}' não existe. Venha para o Ciné!`);
		}
	})
});

module.exports = router;