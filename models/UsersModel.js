const mongoose = require('mongoose');

const User = mongoose.model(
  'Users',
  mongoose.Schema(
    {
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
    },
    { timestaps: true }
  )
);

module.exports = User;
