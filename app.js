var express = require("express");
var path = require('path');
global.authTokens = {};
var loginRouter = require('./routes/login');
const app = express();
const admin = require("./routes/admin")

var fazLoginRouter = require('./routes/fazLogin'); // fazLogin module

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//Rotas:

app.use('/', admin)
app.use('/login', loginRouter);
app.use('/fazLogin', fazLoginRouter); // fazLogin handler

//Porta do local host do projeto
app.listen(8081, function () {
    console.log("SERVIDOR RODANDO NA PORTA http://localhost:8081");
});
