const { createAccount, getAccount } = require("../services/AccountService");

const createNewAccount = async (req, res) => {
  const response = await createAccount(req, res);

  return response;
};

const fetchSingleAccount = async (req, res) => {
  const response = await getAccount(req, res);

  return response;
};
const accountController = {
  createNewAccount: createNewAccount,
  fetchSingleAccount: fetchSingleAccount,
};

module.exports = accountController;
