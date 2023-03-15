var express = require("express");
const app = express();
const admin = require("./routes/admin")

//Rotas:
app.use('/', admin)git add 

//Porta do local host do projeto
app.listen(8081, function() {
    console.log("SERVIDOR RODANDO NA PORTA http://localhost:8081");
});
