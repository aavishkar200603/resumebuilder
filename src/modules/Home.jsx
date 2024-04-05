// import React, { useEffect, useState } from "react";
// import Hero from "../components/Hero";
// import FeatureCart from "../components/FeatureCart";
// import StateCart from "../components/StateCart";
// import Cart from "../components/Card";
// import Footer from "../components/Footer";
// import Slider from "react-slick";

// import { Route, Routes } from "react-router-dom";
// import "../App.css";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import SlickImgSlide from "../components/SlickImgSlide";
// import ImageSlider from "../components/ImageSlider";
// import { SliderData } from "../components/SliderData";
// import { SlidesData } from "../components/SlidesData";

// const Home = () => {
//   return (
//     <>
//       <Hero />
//       <Cart />
//       <SlickImgSlide slidess={SlidesData} />
//       <FeatureCart />

//       <ImageSlider slides={SliderData} />
//       <StateCart />
//       {/* <Footer /> */}
//     </>
//   );
// };

// export default Home;
import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react"; // Import useAuth0 hook
import Hero from "../components/Hero";
import FeatureCart from "../components/FeatureCart";
import StateCart from "../components/StateCart";
import Cart from "../components/Card";
import Footer from "../components/Footer";
import Slider from "react-slick";
import User from "../modules/User";

import { Route, Routes } from "react-router-dom";
import "../App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SlickImgSlide from "../components/SlickImgSlide";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/SliderData";
import { SlidesData } from "../components/SlidesData";

const Home = () => {
  const { isAuthenticated } = useAuth0(); // Retrieve isAuthenticated from useAuth0 hook

  return (
    <>
      {/* Conditional rendering based on user authentication */}
      {isAuthenticated ? (
        <User />
      ) : (
        <>
          <Hero />
          <Cart />
          <SlickImgSlide slidess={SlidesData} />
          <FeatureCart />
          <ImageSlider slides={SliderData} />
          <StateCart />
        </>
      )}
      
    </>
  );
};

export default Home;
