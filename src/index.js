const express = require("express");
const sequelize = require("./db/connect");

const app = require("./app");
const accountRouter = require("./routes/AccountApi");

const port = process.env.PORT || 7000;

app.use("/api/v1", accountRouter);

async function startDatabase() {
  try {
    await sequelize.sync();

    console.log("Connected to Database successfully!");
  } catch (error) {
    console.log(error);
  }
}

app.listen(port, async () => {
  startDatabase();
  console.log("Server is up on port " + port);
});
