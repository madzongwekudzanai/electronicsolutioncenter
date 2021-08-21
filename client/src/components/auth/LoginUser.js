import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../../actions/auth";

const LoginUser = ({ auth: { isAuthenticated }, login }) => {
  const [showSignUp, setShowSignUp] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { email, password } = formData;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Modal
      centered
      show={showSignUp}
      onHide={() => {
        setShowSignUp(!showSignUp);
      }}
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <span className="mod-header">Sign In</span>
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
          </div>
          <div className="text-center ">
            <button className="submit-button col-12" type="submit">
              log in
            </button>

            <p className="modal-para">
              <Link to="/reset">
                <span className="modal-link">Forgot password?</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </Modal>
  );
};

LoginUser.propTypes = {
  auth: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { login })(LoginUser);
