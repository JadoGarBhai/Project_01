import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthenticatedContext } from "../../Context/AuthenticatedContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthenticatedContext);

  return (
    <>
      <header>
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{ zIndex: "1000" }}
        >
          <div className="container">
            <Link className="navbar-brand h1" to="/">
              Jado's Bank
            </Link>

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

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {isAuthenticated ? (
                <button
                  className="btn btn-light ms-auto"
                  type="button"
                  onClick={logout}
                >
                  Logout
                </button>
              ) : (
                <button className="btn btn-light ms-auto" type="button">
                  <Link to="/login" className="text-decoration-none">
                    Login
                  </Link>
                </button>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
