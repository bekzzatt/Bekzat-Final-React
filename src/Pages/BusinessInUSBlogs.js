import React, { useEffect, useState } from "react";
import "./BusinessInUSBlogs.css";
import BlogService from "../Service/BlogService";

function BusinessInUSBlogs() {
  const [businessBlogs, setBusinessBlogs] = useState([]);

  useEffect(() => {
    BlogService.getAllBusinessInUSBlogs().then((data) => {
      setBusinessBlogs(data.articles);
    });
  }, []);

  return (
    <div className="BusinessInUSBlogsContainer">
      <h2>Business News in the US</h2>
      <div className="blogs-container">
        {businessBlogs.map((blog) => (
          <div key={blog.title} className="blog-card">
            {blog.urlToImage && (
              <img
                src={blog.urlToImage}
                alt={blog.title}
                className="blog-image"
              />
            )}
            <div className="blog-details">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <div className="meta-info">
                <p className="author">Author: {blog.author}</p>
                <p className="published-at">
                  Published At: {new Date(blog.publishedAt).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BusinessInUSBlogs;
