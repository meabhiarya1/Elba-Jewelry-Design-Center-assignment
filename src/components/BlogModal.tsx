import React from "react";
import styles from "./BlogModal.module.css";
import closeButton from "../assets/close-icon.png"

type Blog = {
  id: number;
  title: string;
  author: string;
  launchdate: string;
  image_link: string;
  description: string;
};

type BlogModalProps = {
  blog: Blog;
  onClose: () => void;
};

const BlogModal: React.FC<BlogModalProps> = ({ blog, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className={styles.closeButton}>
          <img src={closeButton} alt="Close" className={styles.closeIcon} />
        </button>

        <h2 className={styles.title}>{blog.title}</h2>
        <p className={styles.description}>Description: {blog.description}</p>
      </div>
    </div>
  );
};

export default BlogModal;
