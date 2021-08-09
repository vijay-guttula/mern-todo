import axios from 'axios';
require('dotenv').config();

export default axios.create({
  baseURL:
    process.env.NODE_ENV !== 'production'
      ? 'http://localhost:3000/api/v1/to-do'
      : 'https://mern-stack-todo1.herokuapp.com/api/v1/to-do',
  headers: {
    'Content-type': 'application/json',
  },
});
