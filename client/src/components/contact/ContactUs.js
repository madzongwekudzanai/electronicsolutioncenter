import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import axios from "axios";

const ContactUs = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { name, email, message } = formData;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("/api/contact", {
        name,
        email,
        message
      });
      setAlert("Thank you, your email has been sent", "success", 10000);
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      setAlert("Sorry, something went wrong", "danger");
    }
  };
  return (
    <main className="page-content">
      <div className="contact-us-area box-contact">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="contact-us-inner">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="contact-form-area">
                      <h3>Send Message</h3>
                      <div className="contact-form-warp">
                        <form
                          id="contact-form"
                          onSubmit={e => {
                            onSubmit(e);
                          }}
                        >
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <div className="input-box">
                                <input
                                  type="text"
                                  name="name"
                                  required
                                  value={name}
                                  placeholder="Your Name*"
                                  onChange={e => {
                                    onChange(e);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="input-box">
                                <input
                                  type="email"
                                  name="email"
                                  required
                                  value={email}
                                  placeholder="Mail Address*"
                                  onChange={e => {
                                    onChange(e);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="input-box">
                                <textarea
                                  type="text"
                                  required
                                  name="message"
                                  value={message}
                                  placeholder="Your Message*"
                                  onChange={e => {
                                    onChange(e);
                                  }}
                                ></textarea>
                              </div>
                            </div>
                          </div>
                          <div className="contact-submit-btn">
                            <button
                              type="submit"
                              className="submit-btn default-btn"
                            >
                              Send Email
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 offset-lg-1">
                    <div className="contact-info-wrap">
                      <div className="single-contact-info">
                        <h3>Location</h3>
                        <p>2947 Mapereke Road Marlborough, Harare.</p>
                      </div>
                      <div className="single-contact-info">
                        <h3>Phone</h3>
                        <p>
                          <Link to="/contact">+263 773 051 566</Link>
                        </p>
                        <p>
                          <Link to="/contact">(0242)-309-574</Link>
                        </p>
                      </div>
                      <div className="single-contact-info">
                        <h3>E-mail</h3>
                        <p>
                          <Link to="/contact">spenckapota@gmail.com</Link>
                        </p>
                        <p>
                          <Link to="/contact">escsolutions@gmail.com</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

ContactUs.propTypes = {
  setAlert: PropTypes.func.isRequired
};

export default connect(null, { setAlert })(ContactUs);
