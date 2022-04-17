import React from "react";
import "./Service.css";
const Service = ({ service }) => {
  const { id, name, img, description } = service;
  return (
    <div className="col-sm-12 col-md-6 col-lg-4  ">
      <div className="service">
        <img height={"250px"} width={"330"} src={img} alt="" />

        <h4 className="fw-bolder">{name}</h4>
        <p>
          <small>{description}</small>
        </p>
      </div>
    </div>
  );
};

export default Service;
