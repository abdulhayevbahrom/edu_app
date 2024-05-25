import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div className="loader_container">
      <div id="loading-bar-spinner" className="spinner">
        <div className="spinner-icon"></div>
      </div>
    </div>
  );
}

export default Loader;
