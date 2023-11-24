import React from "react";

const Navbar = () => {
  return (
    <>
      <header>
        <nav
          class="navbar navbar-expand-lg navbar-dark"
          style={{ zIndex: "1000" }}
        >
          <div class="container">
            <a class="navbar-brand h1" href="#">
              Jado's Bank
            </a>

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
              <button class="btn btn-light ms-auto " type="button">
                Login
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
