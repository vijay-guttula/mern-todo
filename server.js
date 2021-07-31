require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// initialising
const app = express();

// cors
app.use(cors());

// morgan
app.use(morgan('dev'));

// server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`I love you ${PORT}`);
});
