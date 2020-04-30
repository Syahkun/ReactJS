import React, { Component } from "react";
import PropTypes from "prop-types";

const Berita = (props) => {
  console.log("test api", props);
  const { judul } = props;
  return (
    <div>
      <table className="table table-bordered">
        <thead className="table-borderless">
          <tr>
            <td scope="col">
              <strong>Berita Terkini</strong>
            </td>
            <td scope="col" style={{ textAlign: "right" }}>
              lihat semua
            </td>
          </tr>
        </thead>
        <tbody>
          {judul.slice(0, 10).map((element, index) => (
            <tr key={index}>
              <td colSpan="2">
                <span className="badge-pill badge-danger">#{index + 1}</span>
                <br />
                <a href="element.url">{element.title}</a>
              </td>
            </tr>
          ))}

          {/* <tr>
            <td colSpan="2">
              <span className="badge-pill badge-danger">#2</span>
              <br />
              Ada Apa Antara Kobar dan Hasan?
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <span className="badge-pill badge-danger">#3</span>
              <br />
              Mengenai Arafat Sang Master Python
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <span className="badge-pill badge-danger">#4</span>
              <br />
              Belajar react.js itu seru. Kamu setuju?
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <span className="badge-pill badge-danger">#5</span>
              <br />
              Sudakah kamu sehat mental?
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

Berita.prototype = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  img: PropTypes.string,
};

export default Berita;
