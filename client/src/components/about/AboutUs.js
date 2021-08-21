import React from "react";
import about2 from "../layout/coverimages/about-02.png";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-us-area section-ptb bg-light-grey">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-us-content">
              <div className="about-section-title text-left">
                <h4>ABOUT ESC</h4>
                <h2>
                  It's our <span>Honour,</span> To <br /> Be <span>With</span>{" "}
                  You
                </h2>
              </div>
              <p>
                Providing fast response, informed expertise and consistently
                high quality solutions, with technical assistance hence making
                sure our clients are satisfied with the services that we offer
                so as to create a customer loyalty base. Our expertise and
                service offerings in this field will enable many of our clients
                to drastically improve their life style
              </p>
              <p>
                We work together to create a culture of inclusion built on
                trust, respect and dignity for all regardless of gender,
                cultural and religious backgrounds. We strive for excellence in
                all that we do.
              </p>
              <Link to="/about">Discover More</Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-us-image">
              <img src={about2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
