import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactComp from "../components/ContactComp";

class Contact extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <ContactComp />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Contact;
