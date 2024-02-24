const express = require("express");
const ejs = require("ejs");
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use(express.json());


app.get("/", function (req, res) {
    res.render("worke");
})