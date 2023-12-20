import React from "react";
import newspng from "./newspaper.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbarContainer">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={newspng} height="36" alt="News Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <a className="nav-link active" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <a className="nav-link" href="#">
                    Login
                  </a>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  some other news about:
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link to="/business" style={{ textDecoration: "none" }}>
                      <a className="dropdown-item">Business in Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/tesla" style={{ textDecoration: "none" }}>
                      <a className="dropdown-item">Tesla news</a>
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to="/aboutMe" style={{ textDecoration: "none" }}>
                      <a className="dropdown-item">About me</a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
