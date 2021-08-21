import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { connect } from "react-redux";

const RegisterUser = ({ setAlert, auth }) => {
  const [showSignUp, setShowSignUp] = useState(true);
  const [verificationSent, setVerificationSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });
  const { name, email, password, password2 } = formData;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      try {
        await axios.post("/api/users", {
          name,
          email,
          password
        });
        setVerificationSent(true);
        setAlert("Account created, please verify your email", "success", 10000);
        setFormData({
          ...formData,
          name: "",
          email: "",
          password: "",
          password2: ""
        });
      } catch (err) {
        setAlert("Invalid credentials", "danger");
      }
    }
  };
  return (
    <Fragment>
      {showSignUp === false ||
      verificationSent === true ||
      auth.isAuthenticated ? (
        <Redirect to="/" />
      ) : (
        <Modal
          className="px-1"
          centered
          show={showSignUp}
          onHide={() => {
            setShowSignUp(!showSignUp);
          }}
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <span className="mod-header">Create Account</span>
            </Modal.Title>
          </Modal.Header>
          <div className="contact-form-warp px-2">
            <form
              id="contact-form"
              onSubmit={e => {
                onSubmit(e);
              }}
            >
              <div className="row">
                <div className="col-lg-12 col-md-12 ">
                  <div className="input-box">
                    <input
                      type="text"
                      name="name"
                      value={name}
                      required
                      placeholder="Your Name*"
                      onChange={e => {
                        onChange(e);
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 ">
                  <div className="input-box">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      required
                      placeholder="Your Email*"
                      onChange={e => {
                        onChange(e);
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 ">
                  <div className="input-box">
                    <input
                      type="password"
                      name="password"
                      value={password}
                      required
                      placeholder="Password*"
                      onChange={e => {
                        onChange(e);
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 ">
                  <div className="input-box">
                    <input
                      type="password"
                      name="password2"
                      password2
                      required
                      placeholder="Confirm Password*"
                      onChange={e => {
                        onChange(e);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="text-center ">
                <button className="submit-button col-12" type="submit">
                  Register
                </button>

                <p className="modal-para">
                  Already have an account?{" "}
                  <Link to="/login">
                    <span className="modal-link">Sign in</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </Fragment>
  );
};

RegisterUser.propTypes = {
  setAlert: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { setAlert })(RegisterUser);
