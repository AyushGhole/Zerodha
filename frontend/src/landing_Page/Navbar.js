import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg border-bottom p-3  bg-body-white">
        <div className="container">
          <Link to="/" className="navbar-brand" href="#">
            <img src="images/logo.svg" alt="logo" style={{ width: "30%" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <ul className="navbar-nav mb-lg-0">
                <li className="nav-item">
                  <Link to="signup" className="nav-link active" href="#">
                    SignUp
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/About" className="nav-link active " href="#">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Products" className="nav-link active " href="#">
                    Products
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/Pricing" className="nav-link active " href="#">
                    Pricing
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/Support" className="nav-link active " href="#">
                    Support
                  </Link>
                </li>

                <li className="nav-item">
                  <a className="nav-link active fs-5 " href="#">
                    <i className="fa-solid fa-bars"></i>
                  </a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
