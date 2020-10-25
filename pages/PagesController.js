const express = require("express");
const router = express.Router();

router.get("/company", (req, res) => {
    res.render("company");
})

router.get("/services", (req, res) => {
    res.render("services");
})

router.get("/contact", (req, res) => {
    res.render("contact");
})

router.get("/furniture", (req, res) => {
    res.render("furniture");
})

router.get("/packing", (req, res) => {
    res.render("packing");
})

router.get("/attendance", (req, res) => {
    res.render("attendance");
})

module.exports = router;