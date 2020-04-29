import React, { Component } from "react";

class Ourteam extends Component {
  render() {
    return (
      <div>
        <section className="alul">
          <h1>
            <span>About Our Team</span>
          </h1>
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
                      <td>Syah Rizal</td>
                    </tr>
                    <tr>
                      <td>Last Name</td>
                      <td>:</td>
                      <td>Pamungkas</td>
                    </tr>
                    <tr>
                      <td>Birthdate</td>
                      <td>:</td>
                      <td>7 April 1995</td>
                    </tr>
                    <tr>
                      <td>Nationality</td>
                      <td>:</td>
                      <td>Indonesia</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>:</td>
                      <td>Mojokerto</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>:</td>
                      <td>
                        <a href="htpps://gmail.com">syahrizal@alterra.id</a>
                      </td>
                    </tr>
                    <tr>
                      <td>Phone</td>
                      <td>:</td>
                      <td>081252174013</td>
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
                    2013 - 2017
                    <span>Universitas Brawijaya</span>
                    Industrial Engineering
                  </li>
                  <li>
                    <img src={require("../images/calendar.png")} />
                    2010 - 2012
                    <span>SMA Negeri Mojoagung</span>
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
                    2018
                    <span>PT Bank Negara Indonesia</span>
                    Regional Manager
                  </li>
                  <li>
                    <img src={require("../images/calendar.png")} />
                    2017
                    <span>PT Varia Usaha Beton</span>
                    Quality Control
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

export default Ourteam;
