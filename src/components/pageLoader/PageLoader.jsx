import React from "react";
import "./styles.scss";

const PageLoader = () => {
  return (
    <div className="loader">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default PageLoader;
