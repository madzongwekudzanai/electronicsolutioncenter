import React, { useState, useEffect } from "react";
import breadcrumbBg1 from "./background/breadcrumb-bg-01.jpg";
import { withRouter } from "react-router-dom";

const SliderTop = ({ history }) => {
  const [activeLink, setActiveLink] = useState(window.location.pathname);
  useEffect(() => {
    history.listen((location, action) => {
      // location is an object like window.location
      setActiveLink(`${location.pathname}`);
    });
  }, [history]);
  return (
    <div
      className="breadcrumb-area bg-image"
      style={{ backgroundImage: `url(${breadcrumbBg1})` }}
    >
      <div className="container">
        <div className="in-breadcrumb">
          <div className="row">
            <div className="col text-center">
              <h3>
                {activeLink === "/about"
                  ? "About Us"
                  : activeLink === "/service"
                  ? "Service"
                  : activeLink === "/contact"
                  ? "Contact Us"
                  : "Blog"}
              </h3>
              <ul className="breadcrumb-list">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active">
                  {activeLink === "/about"
                    ? "About Us"
                    : activeLink === "/service"
                    ? "Service"
                    : activeLink === "/contact"
                    ? "Contact"
                    : "Blog"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SliderTop);
