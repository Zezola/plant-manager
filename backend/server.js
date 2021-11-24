const express = require("express");


const app = express();

app.get("/", (req, res, next) => {
    res.send({
        "message": "Hello World!"
    })
})

app.get("/plant", (req, res, next) => {
    res.send({
        "message": "This page leads to a plant"
    })
})

app.listen(3000, () => {
    console.log("RUNNING AT PORT 3000");
})