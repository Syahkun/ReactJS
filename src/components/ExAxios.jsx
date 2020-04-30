import React, { Component } from "react";
import axios from "axios";
import StateLess from "../components/Stateless";

class StateFull extends Component {
  state = {
    nama: "asa",
    data: [],
  };
  //   changeTitle = () => {
  //     this.setState({ title: "change title" });
  //   };
  getData = async () => {
    const response = await axios.get(
      "https://5e9921015eabe7001681c784.mockapi.io/mentees"
    );
    console.log("response", response.data);
    this.setState({ data: response.data });
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    console.log("cek state", this.state.data);
    return (
      <div>
        <div className="row">
          {this.state.data.map((element, index) => (
            <div key={index} className="col-4">
              {/* <h1>nama = {element.name}</h1> */}
              <StateLess nama={element.name} />
              {/* <h2>{element.content}</h2>
              <h2>{element.hashTag}</h2> */}
            </div>
          ))}
        </div>
      </div>
    );
  }

  //   render() {
  //     return (
  //       <div>
  //         <h1>title = {this.state.data.name[0]}</h1>
  //       </div>
  //     );
  //   }
}

export default StateFull;
