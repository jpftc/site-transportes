const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    cliente = {}
    res.render("index", { cliente: cliente });
})

module.exports = router;