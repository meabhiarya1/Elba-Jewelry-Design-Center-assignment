import axios from 'axios';
import { Blog } from '../types/Blog';

const BASE_URL = 'http://demo.api.admin.circlesnow.com/ProductRESTService.svc';
const headers = {
  token: 'youremail@example.com',
};

export const fetchBlogs = async () => {
  const response = await axios.get(`${BASE_URL}/getschedmsg`, { headers });
  return response.data;
};

export const createBlog = async (data: Blog) => {
  const response = await axios.post(`${BASE_URL}/schedMsg`, data, { headers });
  return response.data;
};
