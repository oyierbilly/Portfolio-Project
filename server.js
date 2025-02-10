const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require('path');
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://oyierbilly1:oyierbilly1@users.t5ekl.mongodb.net/ContactForm")
mongoose.connection.on('connected', ()=>console.log("Database Connected"));

const contactSchema = {
    name:String,
    email:String,
    message:String
}

const Contact = mongoose.model("Contact", contactSchema);

app.use(express.static(path.join(__dirname)));
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
})

app.use(express.static('my-cv.pdf'));


app.post("/", function(req, res) {
    let newContact = new Contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });
    newContact.save();
    res.redirect('/');
})

app.listen(3000, function() {
    console.log("Server is running on 3000")
})