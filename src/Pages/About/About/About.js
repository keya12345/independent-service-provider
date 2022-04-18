import React from "react";
import keya from "../../../image/keya.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="my-self container text-center">
      <img height={300} width={300} src={keya} alt="" />
      <h6>
        I'm Kaniz Fatem Tuz Jahan Keya.I'm a student of CSE at World Universiy
        Of Bangladesh.Now I'm reading final year.
      </h6>
    </div>
  );
};
export default About;
