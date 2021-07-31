require('dotenv').config();
import axios from 'axios';

export default axios.create({
  baseURL: `http://localhost:${process.env.PORT}/api/v1/to-do`,
});
