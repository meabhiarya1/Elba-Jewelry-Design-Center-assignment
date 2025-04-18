import React from "react";

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
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3"
        >
          <img
            src="/close-icon.png"
            alt="Close"
            className="w-5 h-5"
          />
        </button>

        <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
        <p className="text-gray-700 text-sm whitespace-pre-wrap">
          {blog.description}
        </p>
      </div>
    </div>
  );
};

export default BlogModal;
