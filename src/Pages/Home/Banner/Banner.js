import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../image/banar/banner1.jpg";
import banner2 from "../../../image/banar/banner2.jpg";
import banner3 from "../../../image/banar/banner3.jpeg";

const Banner = () => {
  return (
    <div>
      <h1 className="text-center text-danger fw-bolder mt-4">
        Wedding Photographer
      </h1>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 h-25" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h3>First Wedding Banner</h3>
            <p>
              There are so many attractive spots for a wedding photographer in
              Dhaka to shoot your wedding photography at!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-25"
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second Wedding Banner</h3>
            <p>
              The good thing is that MyWed has a list of the best professional
              photographers so you can get a top quality service at an
              unbeatable price.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-25" src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third Wedding Banner</h3>
            <p>
              some studio photography with a wedding photographer, it's time to
              explore! The Liberation War Museum is superb for a photo shoot,
              and so is the Lalbagh Fort.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
