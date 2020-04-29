import React, { Component } from "react";

class Ourteam2 extends Component {
  render() {
    return (
      <div>
        <section className="alul rizal">
          <div className="container">
            <h2>Frontend Developer</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="col-mid-12 pht">
                  <img
                    src={require("../images/shutterstock_796346011@2x.png")}
                  />
                  <div className="border-out"></div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="data">
                  <table className="data">
                    <tr>
                      <td width="120px">First Name</td>
                      <td width="40px">:</td>
                      <td>Fazlur</td>
                    </tr>
                    <tr>
                      <td>Last Name</td>
                      <td>:</td>
                      <td>Rahman</td>
                    </tr>
                    <tr>
                      <td>Birthdate</td>
                      <td>:</td>
                      <td>5 April 1996</td>
                    </tr>
                    <tr>
                      <td>Nationality</td>
                      <td>:</td>
                      <td>Indonesia</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>:</td>
                      <td>Lumajang</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>:</td>
                      <td>
                        <a href="htpps://gmail.com">fazlur@alterra.id</a>
                      </td>
                    </tr>
                    <tr>
                      <td>Phone</td>
                      <td>:</td>
                      <td>081334473592</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row eduexp">
              <div className="col-md-6 edu">
                <h2>Education</h2>
                <ul>
                  <li>
                    <img src={require("../images/calendar.png")} />
                    2014 - 2019
                    <span>Institut Teknologi Sepuluh Nopember</span>
                    Statistics
                  </li>
                  <li>
                    <img src={require("../images/calendar.png")} />
                    2014 - 2019
                    <span>SMA Negeri 2 Lumajang</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 exp">
                <h2>Experience</h2>
                <ul>
                  <li>
                    <img src={require("../images/calendar.png")} />
                    2020 - present
                    <span>Alterra Academy</span>
                    Full Stack Engineer
                  </li>
                  <li>
                    <img src={require("../images/calendar.png")} />
                    2019 - 2019
                    <span>Botika Online</span>
                    Data Analyst
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Ourteam2;
