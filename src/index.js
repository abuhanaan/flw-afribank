const express = require("express");

const app = require("./app");

const port = process.env.PORT || 7000;

app.listen(port, async () => {
  console.log("Connected to database successfully!!!");
  console.log("Server is up on port " + port);
});
