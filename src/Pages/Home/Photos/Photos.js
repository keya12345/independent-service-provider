import React from "react";
import "./Photos.css";
import wedding from "../../../image/Photo/wedding.jpeg";
import mehendi from "../../../image/Photo/mehendi.jpeg";
import outdoor from "../../../image/Photo/outdoor.jpeg";
import indoor from "../../../image/Photo/indoor.jpeg";
import tradition from "../../../image/Photo/traditional.jpeg";
import panjabi from "../../../image/Photo/Punjabi.jpg";
import Photo from "../Photo/Photo";
const Photos = () => {
  const photos = [
    { id: 1, name: "Wedding Photo", img: wedding },
    { id: 2, name: "Mehendi Photo", img: mehendi },

    { id: 3, name: "Outdoor photo", img: outdoor },
    { id: 4, name: "Indoor Photo", img: indoor },
    { id: 5, name: "Traditional Bridal Photo", img: tradition },
    { id: 6, name: "Punjabi Bridal Photo", img: panjabi },
  ];
  return (
    <div id="experts" className="container">
      <h1 className="text-center text-danger fw-bolder mt-4">Bridal Shoot</h1>
      <div className="row">
        {photos.map((photo) => (
          <Photo key={photo.id} photo={photo}></Photo>
        ))}
      </div>
    </div>
  );
};

export default Photos;
