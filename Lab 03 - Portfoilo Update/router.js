const express = require("express");
const router = express.Router();

const { getCV } = require("./controllers/CVCont.js");

const fs = require("fs");

router.get("/", getCV);

router.get("/form", (req,res) => {
    res.render('form');
});

router.post("/form",function(req,res){
    var username = req.body.username;
    var useremail = req.body.useremail;
    var f = {username: username, useremail:useremail};

    console.log(f);
    
    res.render("cv", {username: username, useremail:useremail, educations:edus,experience:exp});
});

module.exports = router;