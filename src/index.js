const express = require("express");
const sequelize = require("./config/config.js");

const app = require("./app");
const accountRouter = require("./routes/AccountApi");

const port = process.env.PORT || 7000;

app.use("/api/v1", accountRouter);

app.listen(port, async () => {
  console.log("Connected to database successfully!!!");
  console.log("Server is up on port " + port);
});
