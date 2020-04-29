import React, { Component } from "react";

class News extends Component {
  render() {
    return (
      <div>
        <div className="card mb-3">
          <img
            className="card-img-top"
            src={require("../images/gambar-berita.jpg")}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">
              Nikahi Rakyat Jelata, Putri Ayako dari Jepang Lepaskan Gelar
              Kerajaan
            </h5>
            <p className="card-text">
              Pernikahan Putri Ayako dan Kei Moriya dilangsungkan lewat upcara
              tradisional Jepang.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
          <div className="card-footer">
            <i className="fa fa-heart ml-5"></i>
            <i className="fa fa-share-alt"></i>
            <i className="fa fa-thumbs-down mr-5"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
