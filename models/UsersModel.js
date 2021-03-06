const mongoose = require('mongoose');

const User = mongoose.model(
  'Users',
  mongoose.Schema(
    {
      fullName: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: Number,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
    { timestaps: true }
  )
);

module.exports = User;
