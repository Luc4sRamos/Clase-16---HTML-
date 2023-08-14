const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3030

app.use(express.static(path.join(__dirname, "public")))

app.listen(PORT, () =>  {
    console.log(`Servidor Corriendo en el puerto ${PORT}`);
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
})

app.get("/register.html", (req, res)=>{
    res.sendFile(__dirname + "/views/register.html")
})

app.get("/login.html", (req, res)=>{
    res.sendFile(__dirname + "/views/login.html")
})