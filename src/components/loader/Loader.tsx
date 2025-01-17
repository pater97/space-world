import React from "react";
import "./Loader.scss"; 

const Loader = () => {
  return (
    <div className="banter-loader">
      {Array.from({ length: 9 }).map((_, index) => (
        <div key={index} className="banter-loader__box"></div>
      ))}
    </div>
  );
};

export default Loader;