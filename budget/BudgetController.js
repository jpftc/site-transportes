const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const SendMail = require("../classes/controllers/SendMail");

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get("/budget", (req, res) => {
    res.render("budget");
})

router.post("/sendform", (req, res) => {

    cliente = {
        name: req.body.name,
        tel: req.body.tel,
        email: req.body.email,
        address: req.body.address,
        address2: req.body.address2,
        address3: req.body.address3,
        uf: req.body.uf,
        city: req.body.city,
        subject: req.body.subject,
        floor: req.body.floor,
        addressdest: req.body.addressdest,
        address2dest: req.body.address2dest,
        address3dest: req.body.address3dest,
        ufdest: req.body.ufdest,
        citydest: req.body.citydest,
        subject2: req.body.subject2,
        floordest: req.body.floordest,
        bio: req.body.bio,
        ajudantes: req.body.ajudantes,
        qtdeajudantes: req.body.qtdeajudantes,
        packing: req.body.packing,
        escadas: req.body.escadas
    }

    SendMail.Send(cliente).then(info => {
        res.redirect("/")
    }).catch(err => {
        res.send(err);
    });

})

module.exports = router;