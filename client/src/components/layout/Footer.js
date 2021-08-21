import React, { useState } from "react";
import logo2 from "./coverimages/logo-2.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { connect } from "react-redux";
import axios from "axios";

const Footer = ({ setAlert }) => {
  const [email, setEmail] = useState("");
  const onSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("/api/contact/newsletter", {
        email
      });
      setAlert("Thank you, your email has been sent", "success", 10000);
      setEmail("");
    } catch (error) {
      setAlert("Sorry, something went wrong", "danger");
    }
  };
  const onChange = e => {
    setEmail(e.target.value);
  };
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="footer-area bg-light-grey section-pt">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-top pt--80 pb--120">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="footer-info mt--40">
                    <div className="footer-logo">
                      <Link to="/">
                        <img src={logo2} alt="" />
                      </Link>
                    </div>
                    <p className="footer-text-info">
                      Providing fast response, informed expertise and
                      consistently high quality solutions.
                    </p>
                    <div className="subscribe-wrap">
                      <div className="input-box">
                        <form onSubmit={e => onSubmit(e)}>
                          <input
                            type="email"
                            required
                            placeholder="Your Email"
                            value={email}
                            onChange={e => onChange(e)}
                          />
                          <button type="submit" className="subscribe-btn">
                            Subscribe
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="footer-info  mt--60">
                    <div className="footer-title">
                      <h3>SERVICES</h3>
                    </div>
                    <ul className="footer-list">
                      <li>
                        <Link to="/service">Heating Repair</Link>
                      </li>
                      <li>
                        <Link to="/service">Electronics Repair</Link>
                      </li>
                      <li>
                        <Link to="/service">Conditioning Repair</Link>
                      </li>
                      <li>
                        <Link to="/service">Electrical Services</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="footer-info  mt--60">
                    <div className="footer-title">
                      <h3>QUICK CONTACT</h3>
                    </div>
                    <ul className="footer-list">
                      <li>
                        2947 Mapereke Road Marlborough, <br /> Harare, Zimbabwe.{" "}
                      </li>
                      <li>
                        <Link to="/contact">spenckapota@gmail.com</Link>
                      </li>
                      <li>
                        <Link to="/contact">+263 773 051 566,</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="footer-info  mt--60">
                    <div className="footer-title">
                      <h3>SOCIAL MEDIA</h3>
                    </div>
                    <p>
                      We work together to create a culture of inclusion built on
                      trust, respect and dignity for all.{" "}
                    </p>
                    <ul className="social">
                      <li>
                        <Link to="/">
                          <i className="flaticon-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="flaticon-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="flaticon-youtube"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="flaticon-google-plus"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="row">
                <div className="col-lg-12">
                  <div className="footer-bottom-inner text-center">
                    <p>
                      Copyright © {getYear()} All Rights Reserved. by{" "}
                      <a
                        target="_blank"
                        rel="external nofollow noopener noreferrer"
                        href="https://kudzanaimadzongwe.com"
                      >
                        Madzongwe Kudzanai
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  setAlert: PropTypes.func.isRequired
};

export default connect(null, { setAlert })(Footer);
