import React from "react";

const Search = (props) => {
  return (
    <section>
      {/* <h4>{props.title}</h4> */}
      <form className="form-inline my-2 pl-sm-5">
        <input
          className="form-control mr-sm-2"
          type="text"
          //   placeholder="Search"
          aria-label="Search"
          placeholder={props.placeholder}
          onChange={props.doSearch}
          value={props.keyword}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          <i className="fa fa-fw fa-search" aria-hidden="true"></i>
        </button>
      </form>
    </section>
  );
};

export default Search;
