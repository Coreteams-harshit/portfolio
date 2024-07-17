import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className=" mx-auto">
            <nav className="navbar navbar-expand-lg navbar-dark " >
            {/* class="navbar  border-bottom border-body" data-bs-theme="dark" */}
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
               Harshit Dixit Portfolio
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
                  <span className="navbar-toggler-icon" ></span>
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
                          isActive ? "menu-active" : ""
                        }
                      >
                        Home
                      </NavLink>{" "}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "menu-active" : ""
                        }
                        to="/intro"
                      >
                        Intro
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "menu-active" : ""
                        }
                        to="/project"
                      >
                        Project
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "menu-active" : ""
                        }
                        to="/blog"
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "menu-active" : ""
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
