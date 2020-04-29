import React, { Component } from "react";

class InfoBanner extends Component {
  render() {
    return (
      <div>
        <section className="info-home">
          <div className="container">
            <div className="row  garis-info">
              <div className="col-md-4 img-info img-line">
                <img
                  src={require("../images/reward.png")}
                  className="img-list"
                />
                <p className="text-info-1 spasi-info">
                  4 Years Job
                  <br />
                  <span className="text-2">Experience</span>
                </p>
              </div>
              <div className="col-md-4 img-info img-line">
                <img
                  src={require("../images/project.png")}
                  className="img-list"
                />
                <p className="text-info-1 spasi-info">
                  500+ Projects
                  <br />
                  <span className="text-2">Completed</span>
                </p>
              </div>
              <div className="col-md-4 img-info">
                <img
                  src={require("../images/support.png")}
                  className="img-list"
                />
                <p className="text-info-1 spasi">
                  Support
                  <br />
                  <span className="text-2">Online 24/7</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default InfoBanner;
