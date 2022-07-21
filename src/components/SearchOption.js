import React from "react";
// import "./SearchOption.css";
import { Link } from "react-router-dom";

function SearchOption(props) {
  return (
    <div className="searchPage__option">
      {props.img && <img src={`${props.img}`} alt=""></img>}
      <Link to={`/${props.path}`}>{props.path}</Link>
    </div>
  );

  // const returnTextAndImage = () => {
  //   return (
  //     <div className="searchPage__option">
  //       <img src={`${props.img}`} alt=""></img>
  //       <Link to={`/${props.path}`}>{props.path}</Link>
  //     </div>
  //   );
  // };

  // const returnTextOnly = () => {
  //   return (
  //     <div className="searchPage__option">
  //       <Link to={`/${props.path}`}>{props.path}</Link>
  //     </div>
  //   );
  // };

  // return !props.img ? returnTextOnly() : returnTextAndImage();
}

export default SearchOption;
