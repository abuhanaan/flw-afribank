const { Account } = require("../models");
const { generateAcctNo } = require("../utils/generateAccNo");

const createAccount = async (req, res) => {
  try {
    const { accountName, dob, accountType, initialBalance } = req.body;
    const newAccountNumber = generateAcctNo();
    // const existingAcct = await Account.findOne({where: {accountNumber: newAccountNumber}})
    const newAccount = await Account.create({
      accountName: accountName.toUpperCase(),
      accountNumber: newAccountNumber,
      DOB: dob,
      accountType: accountType.toUpperCase(),
      initialBalance: initialBalance,
    });

    const response = {
      accountName: newAccount.accountName,
      accountNumber: newAccount.accountNumber,
      DOB: newAccount.DOB,
      accountType: newAccount.accountType,
      initialBalance: newAccount.initialBalance,
    };

    return res.status(201).send(response);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
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
        message: `Account ${accountNumber} does not exist`,
      };

      return res.status(404).json(response);
    }
    const response = {
      accountName: account.accountName,
      accountNumber: account.accountNumber,
      dob: account.DOB,
      accountType: account.accountType,
      initialBalance: account.initialBalance,
    };

    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

const acctService = {
  createAccount: createAccount,
  getAccount: getAccount,
};

module.exports = acctService;
