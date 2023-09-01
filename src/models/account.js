const Sequelize = require("sequelize");
const sequelize = require("../db/connect");

const Account = sequelize.define("accounts", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  accountName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  accountType: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  accountNumber: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  DOB: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  initialBalance: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Account;
