import React, { useEffect, useState } from "react";
import "./HomeNewsPage.css";
import BlogService from "../Service/BlogService";

function HomeNewsPage() {
  const [wallStreetJournalBlogs, setWallStreetJournalBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    BlogService.getAllWallStreetJournalBlogs().then((data) =>
      setWallStreetJournalBlogs(data.articles.slice(0, 30))
    );
  }, []);

  const handleTitleClick = (url) => {
    window.open(url, "_blank");
  };

  const handleSearch = async () => {
    try {
      const searchData = await BlogService.searchNews(searchQuery);
      setWallStreetJournalBlogs(searchData.articles.slice(0, 30));
    } catch (error) {
      console.error("Error searching news:", error.message);
    }
  };

  return (
    <div className="HomePageContainer">
      <h2>Wall Street Journal Blogs</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for blogs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="blogs-container">
        {wallStreetJournalBlogs.map((blog) => (
          <div key={blog.title} className="blog-card">
            {blog.urlToImage && <img src={blog.urlToImage} alt={blog.title} />}
            <div className="blog-details">
              <h3 onClick={() => handleTitleClick(blog.url)}>{blog.title}</h3>
              <p>{blog.description}</p>
              <p>Author: {blog.author}</p>
              <p>Published At: {new Date(blog.publishedAt).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeNewsPage;
