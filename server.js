const { th } = require("date-fns/locale");
const express = require("express");
const app = express();
const path = require("path");
//import middleware here

const PORT = process.env.PORT || 3500;

app.use(express.urlencoded({ extended: false }));


app.use(express.json());

app.use(express.static(path.join(__dirname, "/html")));

/* app.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile("./html/index.html", { root: __dirname });
}); */

app.get("/*", (req, res) => {
    res.status(404).sendFile("./public/404.html", { root: __dirname })
}); 


app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));