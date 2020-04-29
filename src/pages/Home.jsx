import React, { Component } from "react";
import Header from "../components/Header";
import News from "../components/NewsComp";
import Berita from "../components/BeritaTerkini";

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="container-fluid my-5 mr-auto">
          <div className="row">
            <div className="col-sm-5">
              <Berita />
            </div>
            <div className="col-sm-7">
              <News />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
