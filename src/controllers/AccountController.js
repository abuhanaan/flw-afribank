const { createAccount } = require("../services/AccountService");

const createNewAccount = async (req, res) => {
  const response = await createAccount(req, res);

  return response;
};

const accountController = {
  createNewAccount: createNewAccount,
};

module.exports = accountController;
