import React from "react";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Photos from "../Photos/Photos";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Photos></Photos>
      <Blog></Blog>
    </div>
  );
};

export default Home;
