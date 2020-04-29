import React, { Component } from "react";

class Berita extends Component {
  render() {
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
            <tr>
              <td colSpan="2">
                <span className="badge-pill badge-danger">#1</span>
                <br />
                Gabung Alpa Tech Academy Sekarang!
              </td>
            </tr>
            <tr>
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
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Berita;
