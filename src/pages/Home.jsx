import React, { Component } from "react";
import axios from "axios";
//Custom Components
import Header from "../components/Header";
import News from "../components/NewsComp";
import Berita from "../components/BeritaTerkini";
import { Redirect } from "react-router-dom";

//News Api
const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = process.env.REACT_APP_BASE_URL;
const urlLatestNews = baseUrl + "everything?q=bitcoin&apiKey=" + apiKey;
const urlHeadline = baseUrl + "top-headlines?country=id&apiKey=" + apiKey;

class Home extends Component {
  state = {
    listNews: [],
    LatestNews: [],
    HeadlineNews: [],
    isLoading: true,
    search: "",
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

  componentDidMount = async () => {
    // get params from url
    const paramCategory = await this.props.match.params.category;

    // get news from api
    this.getNews(paramCategory);

    this.getDataHeadline();
    this.getDatalatestNews();
  };

  //function get list news from api
  getNews = async (category) => {
    //set conditio if params url undefined
    let urlHeadlineNews;
    if (category) {
      urlHeadlineNews = urlHeadline + "&category=" + category;
    } else {
      urlHeadlineNews = urlHeadline;
    }

    //activate loading
    await this.setState({ isLoading: true });

    //request data from api
    axios
      .get(urlHeadlineNews)
      .then((response) => {
        this.setState({ listNews: response.data.articles, isLoading: false });
      })
      .catch((error) => {
        this.setState({ isLoading: false });
      });
  };

  // function to handle input when change value on field search
  handleInputChange = async (event) => {
    let value = event.target.value;
    await this.setState({ search: value });
    this.searchNews(value);
  };

  // function to do search news when keyboard more than 3 digit
  searchNews = async (keyword) => {
    if (keyword.length > 1) {
      //activate loading
      await this.setState({ isLoading: true });
      try {
        const response = await axios.get(
          baseUrl + "everything?q=" + keyword + "&apiKey=" + apiKey
        );
        this.setState({ listNews: response.data.articles, isLoading: false });
      } catch (error) {
        console.error(error);
      }
    }
  };

  // function to change router and request news by category
  handleRequestCategoryNews = async (categoryName) => {
    // redirect pages to endpoint news-category
    await this.props.history.replace("/news-category/" + categoryName);

    // activate loading
    await this.setState({ isLoading: true });

    // get params from url
    const paramCategory = await this.props.match.params.category;

    // request news by category
    await axios
      .get(urlHeadline + "&category=" + paramCategory)
      .then((response) => {
        this.setState({ listNews: response.data.articles, isLoading: false });
      })
      .catch((error) => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    // console.warn("cek props pada news", this.props);
    const is_login = JSON.parse(localStorage.getItem("is_login"));
    const { listNews, isLoading } = this.state;
    const topHeadlines = listNews.filter((item) => {
      if (item.content !== null && item.image !== null) {
        return item;
      }
      return false;
    });
    return (
      <div>
        {is_login ? (
          <React.Fragment>
            <div>
              <Header
                doSearch={(event) => this.handleInputChange(event)}
                handleRouter={(el) => this.handleRequestCategoryNews(el)}
                getNews={() => this.getNews()}
                keyword={this.state.search}
                placeholder="Tulis sesuatu"
                {...this.props}
              />
            </div>
            <div className="container-fluid my-5 mr-auto">
              {isLoading ? (
                <div style={{ textAlign: "center" }}>Sabar Jek LOading....</div>
              ) : (
                <div className="row">
                  <div className="col-sm-5">
                    <Berita judul={this.state.HeadlineNews} />
                  </div>
                  <div className="col-sm-7">
                    {topHeadlines.map((item, key) => (
                      <News
                        key={key}
                        title={item.title}
                        img={item.urlToImage}
                        content={item.description}
                        url={item.url}
                        published={item.publishedAt}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </React.Fragment>
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { message: "gagal login bro..." },
            }}
          />
        )}
      </div>
    );
  }
}

export default Home;
