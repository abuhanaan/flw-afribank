const sequelize = require("../db/connect");
const Account = require("../models/account");
const { generateAcctNo } = require("../utils/generateAccNo");

const createAccount = async (req, res) => {
  try {
    const { accountName, dob, accountType, initialBalance } = req.body;
    const newAccountNumber = generateAcctNo();
    // const existingAcct = await Account.findOne({where: {accountNumber: newAccountNumber}})
    await Account.create({
      accountName: accountName.toUpperCase(),
      accountNumber: newAccountNumber,
      DOB: dob,
      accountType: accountType.toUpperCase(),
      initialBalance: parseInt(initialBalance),
    })
      .then((newAccount) => {
        const response = {
          success: true,
          status: "Account created successfully",
          data: {
            accountName: newAccount.accountName,
            accountNumber: newAccount.accountNumber,
            DOB: newAccount.DOB,
            accountType: newAccount.accountType,
            initialBalance: newAccount.initialBalance,
          },
        };

        return res.status(201).send(response);
      })
      .catch((error) => {
        console.log(error);
        return res.status(400).send({
          success: false,
          status: "Account creation failed",
          message: error.parent.sqlMessage,
        });
      });
  } catch (error) {
    console.log({ error: error });
    return res.status(500).send({
      success: false,
      status: "Account creation failed",
      message: "Internal Server Error",
    });
  }
};

const getAccount = async (req, res) => {
  try {
    const accountNumber = req.params.accountNumber;

    const account = await Account.findOne({
      where: { accountNumber: accountNumber },
    });

    if (account === null) {
      const response = {
        success: false,
        status: "Not Found",
        message: `Account ${accountNumber} does not exist`,
      };

      return res.status(404).json(response);
    }
    const response = {
      success: true,
      status: "Fetched",
      message: "Account Retrieved Successfully",
      data: {
        accountName: account.accountName,
        accountNumber: account.accountNumber,
        dob: account.DOB,
        accountType: account.accountType,
        initialBalance: account.initialBalance,
      },
    };

    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      status: "Account Retrieval Failed",
      message: "Internal Server Error",
    });
  }
};

const getAllAccounts = async (req, res) => {
  try {
    const accounts = await Account.findAll();
    const filteredAccounts = accounts.map((account) => {
      return {
        accountName: account.accountName,
        accountNumber: account.accountNumber,
        dob: account.DOB,
        accountType: account.accountType,
        initialBalance: account.initialBalance,
      };
    });

    const response = {
      success: true,
      status: "Accounts Retrieved Successfully",
      data: filteredAccounts,
    };
    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      status: "Account Retrieval Failed",
      message: "Internal Server Error",
    });
  }
};

const acctService = {
  createAccount: createAccount,
  getAccount: getAccount,
  getAllAccounts: getAllAccounts,
};

module.exports = acctService;
