import React from "react";
import { Link } from "react-router-dom";

export default class Navigation extends React.Component {
  render() {
    return (
      <>
        <nav
          style={{ color: "black" }}
          className="navbar navbar-expand-lg navbar-light fixed-top"
        >
          <Link className="navbar-brand px-1 fs-2 fw-bold" to="/home">
            P E C O{" "}
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
            className="collapse justify-content-end navbar-collapse"
            id="navbarSupportedContent"
          >
            <div className="navbar-nav mb-2">
              <Link
                style={{ color: "black" }}
                className="nav-item fw-bold"
                to="/about-us"
              >
                About Us <span style={{ color: "white" }}>|</span>
              </Link>

              <Link
                style={{ color: "black" }}
                className="nav-item px-1 fw-bold"
                to="/locations"
              >
                Locations <span style={{ color: "white" }}>|</span>
              </Link>

              <Link
                style={{ color: "black" }}
                className="nav-item fw-bold"
                to="/contact-us"
              >
                Contact Us{" "}
              </Link>
            </div>
          </div>
        </nav>
      </>
    );
  }
}