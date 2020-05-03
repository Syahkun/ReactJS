import React from "react";
import moment from "moment";

const News = (props) => {
  let publish = props.published;
  console.log("test top headline to newscomp", props);
  // const { latest, publish } = props;
  const url = props.url !== null || props.url !== "" ? props.url : "#";
  const target =
    props.url !== null || props.url !== "" ? { target: "_blank" } : "";

  return (
    <div>
      {/* {latest.slice(0, 10).map((element, index) => ( */}
      <div className="card mb-3">
        <img className="card-img-top" src={props.img} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">
            <a href={url} {...target}>
              {props.title}
            </a>
          </h5>
          <p className="card-text">{props.content}</p>
          <p className="card-text">
            <small className="text-muted">
              Last updated {moment({ publish }).fromNow()}
            </small>
          </p>
        </div>
        <div className="card-footer">
          <i className="fa fa-heart ml-5"></i>
          <i className="fa fa-share-alt"></i>
          <i className="fa fa-thumbs-down mr-5"></i>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
};

export default News;
