const express = require("express");

const { createNewAccount } = require("../controllers/AccountController");

const router = new express.Router();

router.post("/accounts", createNewAccount);

module.exports = router;
