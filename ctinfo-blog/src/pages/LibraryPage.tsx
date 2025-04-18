import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogModal from "../components/BlogModal";

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
  {
    id: 2,
    title: "Hope you are enjoying my assessment",
    author: "Edward Bachoura",
    launchdate: "February 14, 2023",
    image_link: "https://source.unsplash.com/random/2",
    description: "A light-hearted blog to make you smile...",
  },
  {
    id: 2,
    title: "Hope you are enjoying my assessment",
    author: "Edward Bachoura",
    launchdate: "February 14, 2023",
    image_link: "https://source.unsplash.com/random/2",
    description: "A light-hearted blog to make you smile...",
  },
  {
    id: 2,
    title: "Hope you are enjoying my assessment",
    author: "Edward Bachoura",
    launchdate: "February 14, 2023",
    image_link: "https://source.unsplash.com/random/2",
    description: "A light-hearted blog to make you smile...",
  },
  {
    id: 2,
    title: "Hope you are enjoying my assessment",
    author: "Edward Bachoura",
    launchdate: "February 14, 2023",
    image_link: "https://source.unsplash.com/random/2",
    description: "A light-hearted blog to make you smile...",
  },
  {
    id: 2,
    title: "Hope you are enjoying my assessment",
    author: "Edward Bachoura",
    launchdate: "February 14, 2023",
    image_link: "https://source.unsplash.com/random/2",
    description: "A light-hearted blog to make you smile...",
  },
  {
    id: 2,
    title: "Hope you are enjoying my assessment",
    author: "Edward Bachoura",
    launchdate: "February 14, 2023",
    image_link: "https://source.unsplash.com/random/2",
    description: "A light-hearted blog to make you smile...",
  },
  {
    id: 2,
    title: "Hope you are enjoying my assessment",
    author: "Edward Bachoura",
    launchdate: "February 14, 2023",
    image_link: "https://source.unsplash.com/random/2",
    description: "A light-hearted blog to make you smile...",
  },
  {
    id: 2,
    title: "Hope you are enjoying my assessment",
    author: "Edward Bachoura",
    launchdate: "February 14, 2023",
    image_link: "https://source.unsplash.com/random/2",
    description: "A light-hearted blog to make you smile...",
  },
  {
    id: 2,
    title: "Hope you are enjoying my assessment",
    author: "Edward Bachoura",
    launchdate: "February 14, 2023",
    image_link: "https://source.unsplash.com/random/2",
    description: "A light-hearted blog to make you smile...",
  },
  {
    id: 2,
    title: "Hope you are enjoying my assessment",
    author: "Edward Bachoura",
    launchdate: "February 14, 2023",
    image_link: "https://source.unsplash.com/random/2",
    description: "A light-hearted blog to make you smile...",
  },
  {
    id: 2,
    title: "Hope you are enjoying my assessment",
    author: "Edward Bachoura",
    launchdate: "February 14, 2023",
    image_link: "https://source.unsplash.com/random/2",
    description: "A light-hearted blog to make you smile...",
  },
  {
    id: 2,
    title: "Hope you are enjoying my assessment",
    author: "Edward Bachoura",
    launchdate: "February 14, 2023",
    image_link: "https://source.unsplash.com/random/2",
    description: "A light-hearted blog to make you smile...",
  },
  // add more as needed...
];

const LibraryPage = () => {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold bg-background">Library</h1>
        <button
          onClick={() => navigate("/new")}
          className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600 transition cursor-pointer"
        >
          New blog
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg border">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left font-medium">Cover image</th>
              <th className="px-4 py-3 text-left font-medium">Launch date</th>
              <th className="px-4 py-3 text-left font-medium">Title</th>
              <th className="px-4 py-3 text-left font-medium">Author</th>
            </tr>
          </thead>
          <tbody>
            {dummyBlogs.map((blog) => (
              <tr key={blog.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">
                  <img
                    src={blog.image_link}
                    alt="cover"
                    className="w-12 h-12 rounded object-cover"
                  />
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {blog.launchdate}
                </td>
                <td
                  className="px-4 py-3 text-blue-600 hover:underline cursor-pointer text-sm"
                  onClick={() => setSelectedBlog(blog)}
                >
                  {blog.title}
                </td>
                <td className="px-4 py-3 text-sm text-gray-800">{blog.author}</td>
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
