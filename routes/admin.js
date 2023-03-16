const express = require("express");
const path = require("path");
const router = express.Router();

// menu
router.get('/', (req, res) => {
    const filePath = path.join(__dirname, "../src", "menu.html");
    res.sendFile(filePath);
});

module.exports = router;
