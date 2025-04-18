import axios from "axios";
import { Blog } from "../types/Blog";
import { useContext } from "react";
import { useEmail } from "../context/EmailContext"; // Importing the context to use it in the component

const BASE_URL = "http://demo.api.admin.circlesnow.com/ProductRESTService.svc";

export const fetchBlogs = async () => {
  // Get the email from context
  const { email } = useContext(useEmail);

  if (!email) {
    throw new Error("Email is required to fetch blogs");
  }

  const headers = {
    token: email, // Dynamically using the email from the context
  };

  const response = await axios.get(`${BASE_URL}/getschedmsg`, { headers });
  return response.data;
};

export const createBlog = async (data: Blog) => {
  // Get the email from context
  const { email } = useContext(useEmail);

  if (!email) {
    throw new Error("Email is required to create a blog");
  }

  const headers = {
    token: email, // Dynamically using the email from the context
  };

  const response = await axios.post(`${BASE_URL}/schedMsg`, data, { headers });
  return response.data;
};
