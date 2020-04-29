import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeBanner from "../components/HomeBanner";
import InfoBanner from "../components/HomeInfoBanner";
import Description from "../components/HomeDescription";
import Team from "../components/HomeTeam";
import LatestBlog from "../components/HomeLatestBlog";

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <HomeBanner />
        </div>
        <div>
          <InfoBanner />
        </div>
        <div class="subtitle section3" id="about">
          <br />
          <br />
          <h1>About</h1>
          <br />
          <br />
        </div>
        <div>
          <Description />
        </div>
        <div>
          <Team />
        </div>
        <div>
          <LatestBlog />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
