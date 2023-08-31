const express = require("express");

const {
  createNewAccount,
  fetchSingleAccount,
  fetchAllAccounts,
} = require("../controllers/AccountController");
const validateFields = require("../middlewares/FieldValidation");
const accountCreationSchema = require("../utils/validations/ValidateAcctCreationRequest");

const router = new express.Router();

router.post(
  "/accounts",
  validateFields(accountCreationSchema),
  createNewAccount
);
router.get("/accounts/:accountNumber", fetchSingleAccount);
router.get("/accounts", fetchAllAccounts);

module.exports = router;
