import React, { useEffect, useState } from "react";
import "./TeslaBlogs.css";
import BlogService from "../Service/BlogService";

function TeslaBlogs() {
  const [teslaBlogs, setTeslaBlogs] = useState([]);

  useEffect(() => {
    BlogService.getAllTeslaBlogs().then((data) => {
      setTeslaBlogs(data.articles);
    });
  }, []);

  return (
    <div className="TeslaBlogsContainer">
      <h2>Tesla News</h2>
      <div className="blogs-container">
        {teslaBlogs.map((blog) => (
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

export default TeslaBlogs;
