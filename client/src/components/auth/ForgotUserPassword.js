import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { connect } from "react-redux";

const ForgotUserPassword = ({ setAlert, auth }) => {
  const [showSignUp, setShowSignUp] = useState(true);
  const [verificationSent, setVerificationSent] = useState(false);
  const [email, setEmail] = useState("");
  const onChange = e => {
    setEmail(e.target.value);
  };
  const onSubmit = async e => {
    e.preventDefault();

    try {
      await axios.post("/api/auth/forgot", {
        email
      });
      setVerificationSent(true);
      setAlert(
        "Account reset link has been sent to your email",
        "success",
        10000
      );
      setEmail("");
    } catch (err) {
      setAlert("Invalid credentials", "danger");
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
              <span className="mod-header">Forgot your password?</span>
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
                      onChange={e => onChange(e)}
                      type="email"
                      value={email}
                      name="email"
                      placeholder="Enter your email..."
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="text-center ">
                <button className="submit-button col-12" type="submit">
                  Send Email
                </button>

                <p className="modal-para">
                  Remembered my password{" "}
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

ForgotUserPassword.propTypes = {
  setAlert: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { setAlert })(ForgotUserPassword);
