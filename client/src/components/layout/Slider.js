import React from "react";
import backgroundImage2 from "./background/background-image-2.jpg";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="hero-slider">
      <div
        className="single-slide overly-bg-black bg-image"
        style={{
          backgroundImage: `url(${backgroundImage2})`
        }}
      >
        <div className="hero-content-one container">
          <div className="row">
            <div className="col-lg-8 ml-auto mr-auto">
              <div className="slider-text-info text-center">
                <h1>
                  We <span>Fix,</span> As <br />
                  Soon As <span>Possible</span>
                </h1>
                <p className="mr-auto ml-auto">
                  We offer a full range of support services so that we meet the
                  needs of our variety clients in relation with the structure of
                  their entire organization. Our comprehensive range of
                  services.
                </p>
                <div className="slider-button">
                  <Link to="/service" className="default-btn">
                    Know More
                  </Link>
                  <Link to="/about" className="primary-btn">
                    About More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
