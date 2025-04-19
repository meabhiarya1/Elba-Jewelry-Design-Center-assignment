import axios from "axios";
import Cookies from "js-cookie";
import { Blog } from "../types/Blog";

const BASE_URL = "http://demo.api.admin.circlesnow.com/ProductRESTService.svc";
const email = Cookies.get("userEmail");

export const fetchBlogs = async () => {
  if (!email) {
    throw new Error("Email is required to fetch blogs");
  }

  const headers = {
    token: email,
  };

  const response = await axios.get(`${BASE_URL}/getschedmsg`, { headers });
  return response.data;
};

export const createBlog = async (data: Blog) => {
  if (!email) {
    throw new Error("Email is required to create a blog");
  }

  const headers = {
    token: email,
  };

  const response = await axios.post(`${BASE_URL}/schedMsg`, data, { headers });
  return response.data;
};
