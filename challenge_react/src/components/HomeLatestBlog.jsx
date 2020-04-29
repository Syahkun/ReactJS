import React, { Component } from "react";

class LatestBlog extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="container">
            <div className="row blog">
              <div className="col-lg-4 blogs-home">
                <img
                  src={require("../images/img_article.jpg")}
                  className="img-blog-home"
                />
                <h4>CREATE A WORDPRESS THEME FROM SCRATCH</h4>
                <div className="editordate">
                  <p className="editor">Larry Stark</p>{" "}
                  <p className="date">7 Januari 2020</p>
                </div>
                <p className="text-blogs">
                  Quick six blind smart out burst. Perfectly on furniture
                  dejection determine my depending an to. Add short water court
                  fat…
                </p>
                <p className="readmore">
                  <a href="./blog.html">Read More</a>
                </p>
              </div>
              <div className="col-lg-4 blogs">
                <img
                  src={require("../images/img_article.jpg")}
                  className="img-blog-home"
                />
                <h4>CREATE A WORDPRESS THEME FROM SCRATCH</h4>
                <div className="editordate">
                  <p className="editor">Larry Stark</p>{" "}
                  <p className="date">7 Januari 2020</p>
                </div>
                <p className="text-blogs">
                  Quick six blind smart out burst. Perfectly on furniture
                  dejection determine my depending an to. Add short water court
                  fat…
                </p>
                <p className="readmore">
                  <a href="./blog.html">Read More</a>
                </p>
              </div>
              <div className="col-lg-4 blogs">
                <img
                  src={require("../images/img_article.jpg")}
                  className="img-blog-home"
                />
                <h4>CREATE A WORDPRESS THEME FROM SCRATCH</h4>
                <div className="editordate">
                  <p className="editor">Larry Stark</p>{" "}
                  <p className="date">7 Januari 2020</p>
                </div>
                <p className="text-blogs">
                  Quick six blind smart out burst. Perfectly on furniture
                  dejection determine my depending an to. Add short water court
                  fat…
                </p>
                <p className="readmore">
                  <a href="./blog.html">Read More</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default LatestBlog;
