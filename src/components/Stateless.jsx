import React, { Component } from "react";
// import PropTypes from "prop-types";

const StateLess = (props) => {
  console.log("cek props", props);
  const { nama, content } = props;
  return (
    <div>
      <h1>{nama}</h1>
      <h4>{content}</h4>
    </div>
  );
};

export default StateLess;
