import React, { Component } from "react";

class ContactComp extends Component {
  render() {
    return (
      <div>
        <section className="contact">
          <h1>Get In Touch</h1>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="phone">
                  <p>Phone</p>
                  <div className="info">
                    <img src={require("../images/phone.png")} />
                    <p>+62 21 909 7890</p>
                  </div>
                </div>
                <div className="email">
                  <p>Email</p>
                  <div className="info">
                    <img src={require("../images/envelope.png")} />
                    <p>info@alterra.id</p>
                  </div>
                </div>
                <div className="web">
                  <p>Website</p>
                  <div className="info">
                    <img src={require("../images/browser.png")} />
                    <p>https://www.alterra.id/</p>
                  </div>
                </div>
                <div className="social">
                  <p>Social Profiles</p>
                  <div className="social-info">
                    <a href="https://facebook.com">
                      <img src={require("../images/facebook.png")} />
                    </a>
                    <a href="https://twitter.com">
                      <img src={require("../images/twitter.png")} />
                    </a>
                    <a href="https://instagram.com">
                      <img src={require("../images/instagram.png")} />
                    </a>
                    <a href="https://linkedin.com">
                      <img src={require("../images/linkedin.png")} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-9">
                <p>
                  If you have any suggestion, project or even you want to say,
                  Hello.. Please fill out the form below and I will reply you
                  shortly.
                </p>
                <form action="./contact.html" method="POST">
                  <div className="name">
                    <label for="fullname">
                      Full Name <span>*</span>
                    </label>
                    <input
                      required
                      id="fullname"
                      name="fullname"
                      type="text"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="email-address">
                    <label for="email">
                      Email Address <span>*</span>
                    </label>
                    <input
                      required
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="phone-number">
                    <label for="phone">
                      Phone Number <span>*</span>
                    </label>
                    <input
                      required
                      id="phone"
                      name="phone"
                      type="text"
                      placeholder="Your Phone Number"
                    />
                  </div>
                  <div className="msg">
                    <label for="message">Message </label>
                    <textarea
                      placeholder=" Your Message"
                      id="message"
                      name="message"
                      rows="5"
                      cols="30"
                    ></textarea>
                  </div>
                  <button type="submit" className="button-form">
                    <img
                      src={require("../images/send-mail.png")}
                      className="img"
                    />
                    <img
                      src={require("../images/send-mail-hover.png")}
                      className="img-hover"
                    />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ContactComp;
