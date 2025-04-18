import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogModal from "../components/BlogModal";
import styles from "./LibraryPage.module.css";

type Blog = {
  id: number;
  title: string;
  author: string;
  launchdate: string;
  image_link: string;
  description: string;
};

const dummyBlogs: Blog[] = [
  {
    id: 1,
    title: "Communicate more by saying less",
    author: "Casey Cox",
    launchdate: "February 22, 2023",
    image_link: "https://source.unsplash.com/random/1",
    description: "This blog is about being concise and impactful...",
  },
  {
    id: 2,
    title: "Hope you are enjoying my assessment",
    author: "Edward Bachoura",
    launchdate: "February 14, 2023",
    image_link: "https://source.unsplash.com/random/2",
    description: "A light-hearted blog to make you smile...",
  },
  // Add more...
];

const LibraryPage = () => {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Library</h1>
        <button className={styles.newButton} onClick={() => navigate("/new")}>
          New blog
        </button>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead className={styles.tableHead}>
            <tr>
              <th>Cover image</th>
              <th>Launch date</th>
              <th>Title</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {dummyBlogs.map((blog) => (
              <tr key={blog.id} className={styles.tableRow}>
                <td>
                  <img
                    src={blog.image_link}
                    alt="cover"
                    className={styles.coverImage}
                  />
                </td>
                <td className={styles.textSecondary}>{blog.launchdate}</td>
                <td
                  className={styles.clickableTitle}
                  onClick={() => setSelectedBlog(blog)}
                >
                  {blog.title}
                </td>
                <td className={styles.textPrimary}>{blog.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedBlog && (
        <BlogModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
      )}
    </div>
  );
};

export default LibraryPage;
