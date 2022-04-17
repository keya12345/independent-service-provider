import React from "react";

const Photo = ({ photo }) => {
  const { img, name } = photo;
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} height={250} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            In the bridal session, the bride gets dressed and usually has her
            makeup and hair done. The bride should have a complete bridal look
            that she wants to have on reception.
          </p>
          <a href="#" className="btn btn-primary">
            Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Photo;
