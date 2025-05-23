import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NewBlogPage.module.css";
import Cookies from "js-cookie";
import { createBlog as createBlogApi } from "../services/blogApi";
import EmailModal from "../components/EmailModal";
import { toast } from "react-toastify";
import dashboardImage from "../assets/Blogpost.svg";


const createBlog = async (blog: any) => {
  try {
    const response = await createBlogApi(blog);
    console.log("Blog created successfully:", response);
    return response;
  } catch (error) {
    console.error("Failed to create blog:", error);
    throw error;
  }
};


const NewBlogPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    launchdate: "",
    author: "",
    image_link: "",
    description: "",
  });

  const navigate = useNavigate();
  const email = Cookies.get("userEmail");

  if (!email) {
    return <EmailModal onSuccess={() => navigate("/")} />;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.description.length > 1000) {
      toast.error("Description should be less than 1000 characters.");
      return;
    }

    await createBlog(formData);
    toast.success("Blog created successfully!");
    setFormData({
      title: "",
      launchdate: "",
      author: "",
      image_link: "",
      description: "",
    });
    navigate("/");
  };


  return (
    <div className="wrapper">
      <div className={styles.backgroungContainer}>
        <div style={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
          <img src={dashboardImage} alt="dashboardImage" className={styles.image} />
        </div>
        <div>
          <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                name="title"
                placeholder="Blog Title"
                value={formData.title}
                onChange={handleChange}
                className={styles.input}
                required
              />
              <input
                name="launchdate"
                type="date"
                placeholder="Launch Date"
                value={formData.launchdate}
                onChange={handleChange}
                className={styles.input}
                required
              />
              <input
                name="author"
                placeholder="Author"
                value={formData.author}
                onChange={handleChange}
                className={styles.input}
                required
              />
              <input
                name="image_link"
                placeholder="Image URL"
                value={formData.image_link}
                onChange={handleChange}
                className={styles.input}
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                rows={5}
                value={formData.description}
                onChange={handleChange}
                className={styles.input}
                required
              />
              <button type="submit" className={styles["create-button"]}>
                Create Blog
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default NewBlogPage;
