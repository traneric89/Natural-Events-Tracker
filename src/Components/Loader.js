import React from "react";
import spinner from "./loading-buffering.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={spinner} alt="Loading" />
      <h1>Fetching EONET Data</h1>
    </div>
  );
};

export default Loader;
