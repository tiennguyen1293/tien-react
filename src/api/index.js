import axios from 'axios';
import * as CONTANTS from 'contants';

const restAPI = axios.create({
  baseURL: CONTANTS.BASE_API,
});

export default restAPI;
