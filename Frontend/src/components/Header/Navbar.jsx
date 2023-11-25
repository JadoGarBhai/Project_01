import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <nav
          class="navbar navbar-expand-lg navbar-dark"
          style={{ zIndex: "1000" }}
        >
          <div class="container">
            <Link class="navbar-brand h1" to="/">
              Jado's Bank
            </Link>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <button class="btn btn-light ms-auto" type="button">
                <Link to="/login" className="text-decoration-none">
                  Login
                </Link>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
