import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OurTeam from "../components/TeamOurTeam1";
import OurTeam2 from "../components/TeamOurTeam2";

class Team extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <OurTeam />
        </div>
        <div>
          <OurTeam2 />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Team;
