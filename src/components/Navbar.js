import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
    >
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">
          <span className="logo-text fs-4">{props.title1}</span>
          <span className="logo-tool text-warning fs-4">{props.title2}</span>
        </Link> */}
        <a className="navbar-brand" href="#">
          <span className="logo-text fs-4">{props.title1}</span>
          <span className="logo-tool text-warning fs-4">{props.title2}</span>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link" to="/">
                Home
              </Link> */}
              {/* <a className="nav-link" href="/">
                Home
              </a> */}
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li> */}
          </ul>
          <div className="d-flex align-items-center gap-2">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
                style={{
                  color: props.mode === "light" ? "#000" : "#fff",
                }}
              >
                {props.mode === "light"
                  ? "Enable Dark Mode"
                  : "Dark Mode Enabled"}
              </label>
            </div>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title1: "Title 1 Here",
  title2: "Title 2 Here",
  aboutText: "About Here",
};