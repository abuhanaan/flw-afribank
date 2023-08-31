const yup = require("yup");

const accountCreationSchema = yup.object({
  accountName: yup.string().required(),
  dob: yup.date().required(),
  accountType: yup.string().required(),
  initialBalance: yup.number().required().positive().integer(),
});

module.exports = accountCreationSchema;
