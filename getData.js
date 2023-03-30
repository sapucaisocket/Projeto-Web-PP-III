var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://login-study-975a8-default-rtdb.firebaseio.com"
});

const db = admin.firestore();

let usersRef = db.collection("Users");

const emails = [];

usersRef.get().then((querySnapshot) => {

    querySnapshot.forEach(document => {
        emails.push(document.data().email);
    })
    console.log(emails);
    if (emails.includes("admin@admin.com")) {
        console.log("user existe")

    } else {
        console.log("user nao existe");
    }
})