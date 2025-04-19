import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogModal from "../components/BlogModal";
import styles from "./LibraryPage.module.css";
import { fetchBlogs } from "../services/blogApi";
import EmailModal from "../components/EmailModal";
import Cookies from "js-cookie";

type Blog = {
  id: number;
  title: string;
  author: string;
  launchdate: string;
  image_link: string;
  description: string;
};

const LibraryPage = () => {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const email = Cookies.get("userEmail"); 

  useEffect(() => {
    if (!email) return; 

    const loadBlogs = async () => {
      try {
        const data = await fetchBlogs();

        const parsedData = JSON.parse(data?.dt);

        const mappedBlogs = parsedData.map((blog: any) => ({
          ...blog,
          image_link: blog.image_lnk,
          launchdate: new Date(blog.launchdate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        }));

        setBlogs(mappedBlogs);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, [email]);

  if (!email) {
    return <EmailModal />;
  }

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
            {loading ? (
              <tr>
                <td colSpan={4} style={{ textAlign: "center", padding: "16px" }}>
                  Loading...
                </td>
              </tr>
            ) : (
              blogs?.map((blog) => (
                <tr key={blog.id} className={styles.tableRow}>
                  <td>
                    <img src={blog.image_link} alt="cover" className={styles.coverImage} />
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
              ))
            )}
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
