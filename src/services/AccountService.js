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

const acctService = {
  createAccount: createAccount,
};

module.exports = acctService;
