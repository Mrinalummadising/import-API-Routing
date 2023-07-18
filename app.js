const express = require("express");

const app = express();

app.get("/", (Request, Response) => {
  Response.send("Home Page");
});

app.get("/about", (Request, Response) => {
  Response.send("About page");
});

module.exports = app;
