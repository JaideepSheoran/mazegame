const express = require("express");
const port = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


app.listen(port, ()=> {
    console.log(`Active at ${port}`);
});