import axios from "axios";
const apiKey = "74ec16c414b0454097426b1fc514ed26";
export default class BlogService {
  static async getAllAppleBlogs() {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=apple&from=2023-12-19&to=2023-12-19&sortBy=popularity&apiKey=74ec16c414b0454097426b1fc514ed26"
      );

      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`Error: Received status code ${response.status}`);
      }
    } catch (e) {
      console.error("Error:", e.message);
    }
  }
  static async getAllTeslaBlogs() {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2023-11-20&sortBy=publishedAt&apiKey=74ec16c414b0454097426b1fc514ed26"
      );

      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`Error: Received status code ${response.status}`);
      }
    } catch (e) {
      console.error("Error:", e.message);
    }
  }
  static async getAllBusinessInUSBlogs() {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=74ec16c414b0454097426b1fc514ed26"
      );

      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`Error: Received status code ${response.status}`);
      }
    } catch (e) {
      console.error("Error:", e.message);
    }
  }
  static async getAllWallStreetJournalBlogs() {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=74ec16c414b0454097426b1fc514ed26"
      );

      if (response.status === 200) {
        console.log(response.data);
        return response.data;
      } else {
        console.error(`Error: Received status code ${response.status}`);
      }
    } catch (e) {
      console.error("Error:", e.message);
    }
  }
  static async searchNews(query) {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`
      );

      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`Error: Received status code ${response.status}`);
        throw new Error(`Failed to fetch search results`);
      }
    } catch (error) {
      console.error("Error:", error.message);
      throw new Error(`Failed to fetch search results`);
    }
  }
}
