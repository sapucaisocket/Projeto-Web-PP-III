var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://login-study-975a8-default-rtdb.firebaseio.com"
});

const db = admin.firestore();

const data = {
    id: "pedro@admin.com",
    email: "pedro@admin.com",
    senha: "pedro"
}

db.collection("Users").doc(data.id).set({
    email: data.email,
    senha: data.senha,
})
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });