import React from "react";
import service1 from "../layout/coverimages/service-01.png";
import service2 from "../layout/coverimages/service-02.png";
import service3 from "../layout/coverimages/service-03.png";
import service4 from "../layout/coverimages/service-04.png";
import service5 from "../layout/coverimages/service-05.png";
import service6 from "../layout/coverimages/service-06.png";
import { Link } from "react-router-dom";

const OurService = () => {
  return (
    <div className="provide-area section-ptb">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 ml-auto mr-auto">
            <div className="section-title">
              <h4>ELECTRONICS SERVICES</h4>
              <h2>
                What We <span>Provide</span>
              </h2>
              <p>
                We offer a full range of support services so that we meet the
                needs clients in relation with the structure of their entire
                organization.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="provide-service mt--30">
              <div className="provide-image">
                <Link to="/service">
                  <img src={service1} alt="" />
                </Link>
              </div>
              <h5 className="provide-title">
                <Link to="/service">Laptop Repair</Link>
              </h5>
              <div className="provide-contets">
                <p>
                  There are many variations of Laptop repair Lorem electronics
                  repair, but the majority have suffered alteration in
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="provide-service mt--30">
              <div className="provide-image">
                <Link to="/service">
                  <img src={service2} alt="" />
                </Link>
              </div>
              <h5 className="provide-title">
                <Link to="/service">Smartphone Repair</Link>
              </h5>
              <div className="provide-contets">
                <p>
                  There are many variations of Laptop repair Lorem electronics
                  repair, but the majority have suffered alteration in
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="provide-service mt--30">
              <div className="provide-image">
                <Link to="/service">
                  <img src={service3} alt="" />
                </Link>
              </div>
              <h5 className="provide-title">
                <Link to="/service">Camera Repair</Link>
              </h5>
              <div className="provide-contets">
                <p>
                  There are many variations of Laptop repair Lorem electronics
                  repair, but the majority have suffered alteration in
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="provide-service mt--30">
              <div className="provide-image">
                <Link to="/service">
                  <img src={service4} alt="" />
                </Link>
              </div>
              <h5 className="provide-title">
                <Link to="/service">Others Repair</Link>
              </h5>
              <div className="provide-contets">
                <p>
                  There are many variations of Laptop repair Lorem electronics
                  repair, but the majority have suffered alteration in
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="provide-service mt--30">
              <div className="provide-image">
                <Link to="/service">
                  <img src={service5} alt="" />
                </Link>
              </div>
              <h5 className="provide-title">
                <Link to="/service">Iphone Repair</Link>
              </h5>
              <div className="provide-contets">
                <p>
                  There are many variations of Laptop repair Lorem electronics
                  repair, but the majority have suffered alteration in
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="provide-service mt--30">
              <div className="provide-image">
                <Link to="/service">
                  <img src={service6} alt="" />
                </Link>
              </div>
              <h5 className="provide-title">
                <Link to="/service">Desktop Repair</Link>
              </h5>
              <div className="provide-contets">
                <p>
                  There are many variations of Laptop repair Lorem electronics
                  repair, but the majority have suffered alteration in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
