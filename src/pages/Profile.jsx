import React from "react";
import { Redirect } from "react-router-dom";
import Header from "../components/Header";
import { connect } from "react-redux";

const Profile = (props) => {
  //get data is_login, email and full_name from local storage
  // const is_login = JSON.parse(localStorage.getItem("is_login"));
  // const email = localStorage.getItem("email");
  // const full_name = localStorage.getItem("full_name");

  //set condition when status login == nul, redirect to signin and
  //show profile when is login is not null
  if (!props.dataUser.is_login) {
    return (
      <Redirect
        to={{
          pathname: "/signin",
          state: { message: "gagal login ya.." },
        }}
      />
    );
  } else {
    return (
      <React.Fragment>
        <Header {...props} />
        <section className="content">
          <h1
            style={{
              textalign: "center",
            }}
          >
            Profile
          </h1>
          <p>
            <label>Email:</label> {props.dataUser.email}
          </p>
          <p>
            <label>Full Name:</label> {props.dataUser.full_name}
          </p>
        </section>
      </React.Fragment>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
  }
}

export default connect(mapStateToProps) (Profile);
// export default Profile;
