import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogComp from "../components/BlogComp";

class Blog extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <BlogComp />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Blog;
