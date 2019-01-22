const express = require("express");
const mysql = require("mysql");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

const port = process.env.PORT || 786;
app.listen(port, () => console.log("Listen"));
