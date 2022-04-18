import React from "react";
import page404 from "../../../image/logo/page404.jpg";
const PageNotFound = () => {
  return (
    <div>
      <h1 className="text-danger text-center">This is wrong places</h1>
      <img className="w-100" src={page404} alt="" />
    </div>
  );
};

export default PageNotFound;
