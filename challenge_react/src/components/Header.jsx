import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="container header">
          <nav className="row navbar navbar-expand-lg">
            <div className="col-lg-6">
              <img
                className="logo alterra"
                src={require("../images/logo-ALTA@2x.png")}
                style={{ width: "110px", height: "59px" }}
              />
            </div>
            <div className="col-lg-6">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="navbar-nav">
                <a className="nav-link bar aktif" href="./index.html">
                  Home <span className="sr-only">(current)</span>
                </a>
                <a className="nav-link bar" href="#about">
                  About
                </a>
                <a className="nav-link bar" href="./team.html">
                  Team
                </a>
                <a className="nav-link bar" href="./blog.html">
                  Blog
                </a>
                <button
                  type="button"
                  className="btn btn-outline-warning btn-menu"
                >
                  <a href="./contact.html">Contact</a>
                </button>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
