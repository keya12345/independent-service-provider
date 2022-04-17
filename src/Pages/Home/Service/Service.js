import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";
const Service = ({ service }) => {
  const { id, name, img, description } = service;
  const navigate = useNavigate();
  const ServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="col-sm-12 col-md-6 col-lg-4  ">
      <div className="service">
        <img height={"250px"} width={"330"} src={img} alt="" />

        <h4 className="fw-bolder">{name}</h4>
        <p>
          <small>{description}</small>
        </p>
        <button
          onClick={() => ServiceDetail(id)}
          className="btn btn-primary mb-3"
        >
          Book: {name}
        </button>
      </div>
    </div>
  );
};

export default Service;
