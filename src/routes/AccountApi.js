const express = require("express");

const {
  createNewAccount,
  fetchSingleAccount,
  fetchAllAccounts,
} = require("../controllers/AccountController");

const router = new express.Router();

router.post("/accounts", createNewAccount);
router.get("/accounts/:accountNumber", fetchSingleAccount);
router.get("/accounts", fetchAllAccounts);

module.exports = router;
