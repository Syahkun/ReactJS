import React, { Component } from "react";
import axios from "axios";
//Custom Components
import Header from "../components/Header";
import News from "../components/NewsComp";
import Berita from "../components/BeritaTerkini";

//News Api
const apiKey = "874c2936717449ac9fa8d4494e7fc947";
const baseUrlLatestNews = "https://newsapi.org/v2/";
const baseUrlHeadline = "https://newsapi.org/v2/";
const urlLatestNews =
  baseUrlLatestNews + "everything?q=bitcoin&apiKey=" + apiKey;
const urlHeadline =
  baseUrlHeadline + "top-headlines?country=us&apiKey=" + apiKey;

class Home extends Component {
  state = {
    LatestNews: [],
    HeadlineNews: [],
  };

  getDataHeadline = async () => {
    const response = await axios.get(urlHeadline);
    console.log("response headline", response.data.articles);
    this.setState({ HeadlineNews: response.data.articles });
  };

  getDatalatestNews = async () => {
    const response = await axios.get(urlLatestNews);
    console.log("response latest news", response.data.articles);
    this.setState({ LatestNews: response.data.articles });
  };

  componentDidMount() {
    this.getDataHeadline();
    this.getDatalatestNews();
  }
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="container-fluid my-5 mr-auto">
          <div className="row">
            <div className="col-sm-5">
              <Berita judul={this.state.HeadlineNews} />
            </div>
            <div className="col-sm-7">
              <News
                latest={this.state.LatestNews}
                publish={this.state.LatestNews.publishedAt}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
