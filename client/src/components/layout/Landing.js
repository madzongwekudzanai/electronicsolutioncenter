import React, { Fragment } from "react";
import Slider from "./Slider";
import AboutUs from "../about/AboutUs";
import OurService from "../service/OurService";
import LatestNews from "../blog/LatestNews";

const Landing = () => {
  return (
    <Fragment>
      <Slider />
      <AboutUs />
      <OurService />
      <LatestNews />
    </Fragment>
  );
};

export default Landing;
