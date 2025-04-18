import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NewBlogPage.module.css"; // CSS Module with styles like .container, .form, etc.

const createBlog = async (blog: any) => {
  console.log("Creating blog...", blog);
  return new Promise((resolve) => setTimeout(resolve, 1000));
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createBlog(formData);
    navigate("/library");
  };

  return (
    <div className="wrapper">
      <div className={styles.container}>
        <div className={styles.heading}>Create New Blog</div>
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
          <button type="submit" className={styles["login-button"]}>
            Create Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewBlogPage;
