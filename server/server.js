const { th } = require("date-fns/locale");
const express = require("express");
const app = express()
const path = require("path")
//importing custom middleware from /middleware/logEvents.js:
const { logger } = require("./middlware/logger")
const PORT = process.env.PORT || 3500;

//custom middleware - logger
app.use(logger);

app.use(express.urlencoded({ extended: false}));

//middleware for json
app.use(express.json())

//serve static files
app.use(express.static(path.join(__dirname, "/public")));

app.get('^/$|index(.html)?', (req, res) => {
    res.sendFile("./html/index.html", { root: __dirname });
// res.sendFile(path.join(__dirname, "views", "index.html")); -> an alternative way of responding with a file

})



app.get("/*", (req, res) => {
    res.status(404).sendFile("")
})