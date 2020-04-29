import React, { Component } from "react";

class Team extends Component {
  render() {
    return (
      <div>
        <section className="subtitle section4">
          <div className="container">
            <div>
              <h1 className="subtitle-line-1">Meet Our Team</h1>
              <p className="subtitle-line-2">
                Our Team Consists Only of the Best Talents
              </p>
            </div>
          </div>
          <section className="our-team">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 profil">
                  <div className="col-lg-12">
                    <img
                      src={require("../images/shutterstock_796346011@2x.png")}
                      className="img-profil"
                    />
                    <div className="profil-border-out"></div>
                    <div className="shadow"></div>
                  </div>
                  <p className="profil-name">Aulia Rahmania</p>
                  <p className="designer">UX Designer</p>
                </div>
                <div className="col-lg-4 profil-mid">
                  <div className="col-lg-12">
                    <img
                      src={require("../images/shutterstock_796346011@2x.png")}
                      className="img-profil"
                    />
                    <div className="profil-border-out profil-border-out-mid"></div>
                  </div>
                  <p className="profil-name">Aulia Rahmania</p>
                  <p className="designer">UX Designer</p>
                </div>
                <div className="col-lg-4 profil">
                  <div className="col-lg-12">
                    <img
                      src={require("../images/shutterstock_796346011@2x.png")}
                      className="img-profil"
                    />
                    <div className="profil-border-out"></div>
                  </div>
                  <p className="profil-name">Aulia Rahmania</p>
                  <p className="designer">UX Designer</p>
                </div>
              </div>
              <p className="check-now">
                <a href="./team.html">Check Now &#8594;</a>
              </p>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default Team;
