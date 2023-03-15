const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Pagina menu")
});

module.exports = router;