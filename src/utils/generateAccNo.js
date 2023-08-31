const generateAcctNo = () => {
  return Math.floor(Math.random() * 9000000000) + 1000000000;
};

const helper = {
  generateAcctNo: generateAcctNo,
};

module.exports = helper;
