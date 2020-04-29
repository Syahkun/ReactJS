import React, { Component } from "react";

class HomeBanner extends Component {
  render() {
    return (
      <div>
        <section class="intro">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 image-intro">
                <img
                  src={require("../images/Group 16136@2x@2x.png")}
                  alt="Group"
                />
              </div>
              <div class="col-lg-6 text-intro">
                <div class="greet">
                  <h4>HI THERE !</h4>
                </div>
                <div class="we-are">
                  <h1>
                    We are an <span>Alterra Academy.</span>
                  </h1>
                </div>
                <div class="intro-desc">
                  <p>
                    Alterra Academy Full-stack Program is Coding Bootcamp which
                    transform you being professional Software Engineer within 3
                    months.
                  </p>
                </div>
                <button type="button" class="button1">
                  <img
                    src={require("../images/sport-team.png")}
                    class="img"
                    alt="sport-team"
                  />
                  <img
                    src={require("../images/sport-team-hover.png")}
                    class="img-hover"
                    alt="sport-team-hover"
                  />
                  <a href="./team.html">More About Team</a>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomeBanner;
