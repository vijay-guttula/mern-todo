const mongoose = require('mongoose');

const Todos = mongoose.model(
  'Todos',
  mongoose.Schema(
    {
      userId: {
        type: String,
        required: true,
      },
      todos: [
        {
          checked: {
            type: Boolean,
            required: true,
          },
          text: {
            type: String,
            required: true,
          },
        },
      ],
    },
    {
      timestamps: true,
    }
  )
);

module.exports = Todos;
