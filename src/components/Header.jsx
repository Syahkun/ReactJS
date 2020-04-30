import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            className="logo App-logo"
            src={require("../images/logo192.png")}
          />
          KabarKabar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav pl-sm-5 ">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Sepakbola <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Ekonomi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Politik
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Hiburan
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Lainnya
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 pl-sm-5">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              <i className="fa fa-fw fa-search" aria-hidden="true"></i>
            </button>
          </form>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-sm-5 pl-sm-5">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Masuk
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Daftar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
