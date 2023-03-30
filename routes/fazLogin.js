var express = require('express');
var router = express.Router();

/* POST login. */

router.post('/', function (req, res, next) {
    const { usuario, senha } = req.body;
});

module.exports = router;