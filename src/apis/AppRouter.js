import axios from 'axios';
require('dotenv').config();

export default axios.create({
  baseURL: `http://localhost:3000/api/v1/to-do`,
  headers: {
    'Content-type': 'application/json',
  },
});
