import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="container-fluid">
            <div className="row footer">
              <div className="col-lg-5 logo-col-1">
                <img
                  src={require("../images/logo-ALTA-v2@2x.png")}
                  className="logo-footer"
                />
              </div>
              <div className="col-lg-4 medsos-col-2">
                <p className="text-sosmed">Social Media</p>
                <div className="navbar-list">
                  <ul className="list-unstyled" style={{ paddingTop: "16px" }}>
                    <li className="facebook">
                      <img
                        src={require("../images/ic_fb.png")}
                        style={{ widht: "20.17px", height: "20.17px" }}
                        alt="fb"
                      />
                    </li>
                    <li>
                      <img
                        src={require("../images/ic_twitter.png")}
                        style={{ widht: "20.17px", height: "20.17px" }}
                        alt="twitter"
                      />
                    </li>
                    <li>
                      <img
                        src={require("../images/ic_ig.png")}
                        style={{ widht: "20.17px", height: "20.17px" }}
                        alt="ic"
                      />
                    </li>
                    <li>
                      <img
                        src={require("../images/ic_linkedin.png")}
                        style={{ widht: "20.17px", height: "20.17px" }}
                        alt="li"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 copyright-col-3">
                <p className="copyright">Copyright © 2019 Alterra</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
