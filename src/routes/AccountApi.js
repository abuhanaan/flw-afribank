const express = require("express");

const {
  createNewAccount,
  fetchSingleAccount,
} = require("../controllers/AccountController");

const router = new express.Router();

router.post("/accounts", createNewAccount);
router.get("/accounts/:accountNumber", fetchSingleAccount);

module.exports = router;
