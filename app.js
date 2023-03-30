var express = require("express");
var path = require('path');
global.authTokens = {};
var loginRouter = require('./routes/login');
var homepageRouter = require('./routes/admin');

const app = express();
const admin = require("./routes/admin")

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//Rotas:
app.use('/', homepageRouter)
app.use('/login', loginRouter);

//Porta do local host do projeto
app.listen(8081, function() {
    console.log("SERVIDOR RODANDO NA PORTA http://localhost:8081");
});
