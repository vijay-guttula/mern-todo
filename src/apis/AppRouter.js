import axios from 'axios';
require('dotenv').config();

export default axios.create({
  baseURL: `http://localhost:${process.env.PORT}/api/v1/to-do`,
});
