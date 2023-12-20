import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeNewsPage from "./Pages/HomeNewsPage";
import Navbar from "./components/navbar/Navbar";
import BusinessInUSBlogs from "./Pages/BusinessInUSBlogs";
import LoginPage from "./Pages/LoginPage";
import TeslaBlogs from "./Pages/TeslaBlogs";
import AboutMePage from "./Pages/AboutMePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeNewsPage />}></Route>
          <Route path="/business" element={<BusinessInUSBlogs />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/tesla" element={<TeslaBlogs />}></Route>
          <Route path="/aboutMe" element={<AboutMePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
