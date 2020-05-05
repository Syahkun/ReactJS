import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { connect } from "react-redux";
import { doLogout } from "../store/actions/actionUser"

class HeaderUser extends React.Component {
  login = JSON.parse(localStorage.getItem("is_login"));
  // function to change router by category news
  changeRouter = async (category) => {
    // condition when handleRouter undefined/not
    if (this.props.getNewsCategory) {
      this.props.getNewsCategory(category);
    } else {
      // redirect pages to endpoint news-category
      await this.props.history.replace("/news-category/" + category);
    }
  };

  // function to do logout
  postSignout = async () => {
    await this.props.doLogout();
    const is_login = this.props.logout;
    console.warn("tes post signout", this.props)
    if (!is_login){
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand">
            <img
              className="logo App-logo"
              src={require("../images/logo192.png")}
            />
            <Link to="/" onClick={() => this.props.getNews}>KabarKabar</Link>
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
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav pl-sm-5 ">
              <li
                className="nav-item active"
                value="sport"
                onClick={() => this.changeRouter("sports")}
              >
                <a className="nav-link">
                  Olahraga <span className="sr-only">(current)</span>
                </a>
              </li>
              <li
                className="nav-item active"
                value="business"
                onClick={() => this.changeRouter("business")}
              >
                <a className="nav-link">
                  Ekonomi
                </a>
              </li>
              <li
                className="nav-item active"
                value="entertainment"
                onClick={() => this.changeRouter("entertainment")}
              >
                <a className="nav-link">Hiburan</a>
              </li>
              <li
                className="nav-item active"
                value="health"
                onClick={() => this.changeRouter("health")}
              >
                <a className="nav-link">
                  Kesehatan
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Lainnya
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a
                    className="dropdown-item"
                    value="technology"
                    onClick={() => this.changeRouter("technology")}
                  >
                    Teknologi
                  </a>
                  <a
                    className="dropdown-item"
                    value="science"
                    onClick={() => this.changeRouter("science")}
                  >
                    Science
                  </a>
                  <div className="dropdown-divider"></div>
                  <a
                    className="dropdown-item"
                    value="general"
                    onClick={() => this.changeRouter("general")}
                  >
                    General
                  </a>
                </div>
              </li>
            </ul>
            <Search {...this.props} />
            {this.props.dataUser.is_login ? (
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-sm-5 pl-sm-5">
                  <li className="nav-item">
                    <a className="nav-link" id="login">
                      <Link to="/profile">Profile</Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      onClick={() => this.postSignout()}
                    >
                      Keluar
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-sm-5 pl-sm-5">
                  <li className="nav-item">
                    <a className="nav-link" id="login">
                      <Link to="/signin">Masuk</Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      Daftar
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
    logout: state.user.is_login,
  }
}

const mapDispatchToProps = {
  
  doLogout: doLogout,
}

export default connect(mapStateToProps, mapDispatchToProps) (HeaderUser);
