const {
  createAccount,
  getAccount,
  getAllAccounts,
} = require("../services/AccountService");

const createNewAccount = async (req, res) => {
  const response = await createAccount(req, res);

  return response;
};

const fetchSingleAccount = async (req, res) => {
  const response = await getAccount(req, res);

  return response;
};

const fetchAllAccounts = async (req, res) => {
  const response = await getAllAccounts(req, res);

  return response;
};

const accountController = {
  createNewAccount: createNewAccount,
  fetchSingleAccount: fetchSingleAccount,
  fetchAllAccounts: fetchAllAccounts,
};

module.exports = accountController;
