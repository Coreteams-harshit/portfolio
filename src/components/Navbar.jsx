import React from "react";
import { NavLink } from "react-router-dom";
// import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <>
      <div
        className="container-fluid"
        style={{ paddingRight: "0rem", paddingLeft: "0.1rem" }}
      >
        <div
          className="row"
          style={{ marginRight: "0rem", marginLeft: "0rem" }}
        >
          <div className="mx-auto">
            <nav className="navigationset = navbar-expand-lg">
              <div
                className="container-fluid ssont"
                style={{
                  display: "flex !important",
                  flexWrap: "inherit !important",
                  alignItems: " center !important",
                  justifyContent: "space-between !important",
                }}
              >
                <NavLink className="logo navbar-brand" to="/">
                  {/* Harshit Dixit Portfolio */}
                  {/* <span className="logoName">h</span> */}
                  <span className="logoName">H</span>
                  <span className="logoName">a</span>
                  <span className="logoName">r</span>
                  <span className="logoName">s</span>
                  <span className="logoName">h</span>
                  <span className="logoName">i</span>
                  <span className="logoName">t </span>
                  <span className="logoName"> </span>
                  <span className="logoName">D</span>
                  <span className="logoName">i</span>
                  <span className="logoName">x</span>
                  <span className="logoName">i</span>
                  <span className="logoName">t</span>
                </NavLink>
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
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "menu-active nav-link" : "nav-link"
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "menu-active nav-link" : "nav-link"
                        }
                        to="/intro"
                      >
                        Intro
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "menu-active nav-link" : "nav-link"
                        }
                        to="/project"
                      >
                        Project
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "menu-active nav-link" : "nav-link"
                        }
                        to="/blog"
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "menu-active nav-link" : "nav-link"
                        }
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
