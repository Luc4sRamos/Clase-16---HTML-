const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname)))

app.listen(3030, () =>  {
    console.log("Servidor Corriendo Mercado Liebre");
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
})