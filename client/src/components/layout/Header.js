import React, { useState, Fragment } from "react";
import logo from "../layout/coverimages/logo.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

const Header = ({ logout, auth: { isAuthenticated, loading } }) => {
  const [navShow, setNavShow] = useState(false);
  const onClick = e => {
    setNavShow(!navShow);
  };
  return (
    <header className="header-area inner-header">
      <div className="header-bottom-area header-sticky is-sticky">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-bottom-wrap">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="logo-area">
                      <Link to="/">
                        <img src={logo} alt="" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="main-menu">
                      <div className="mean-push"></div>
                      <nav className="main-navigation">
                        <ul>
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/about">About</Link>
                          </li>
                          <li>
                            <Link to="/service">Service</Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact</Link>
                          </li>
                          <li>
                            <Link to="/blog">Blog</Link>
                          </li>
                          <li>
                            {!loading && (
                              <Fragment>
                                {isAuthenticated ? (
                                  <Link
                                    onClick={() => {
                                      logout();
                                    }}
                                  >
                                    Log Out
                                  </Link>
                                ) : (
                                  <Link to="/register">Register</Link>
                                )}
                              </Fragment>
                            )}
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col">
                    <div className="mobile-menu d-block d-lg-none mean-container">
                      <div className="mean-bar">
                        <Link
                          className="meanmenu-reveal"
                          style={{ right: "0", left: "auto" }}
                          onClick={e => {
                            onClick(e);
                          }}
                        >
                          <span className="menu-bar"></span>
                        </Link>
                        <nav
                          className="mean-nav"
                          style={{ display: navShow ? "block" : "none" }}
                        >
                          <ul>
                            <li
                              onClick={e => {
                                onClick(e);
                              }}
                              className="active"
                            >
                              <Link to="/">Home</Link>
                            </li>
                            <li
                              onClick={e => {
                                onClick(e);
                              }}
                            >
                              <Link to="/about">About</Link>
                            </li>
                            <li
                              onClick={e => {
                                onClick(e);
                              }}
                            >
                              <Link to="/service">Service</Link>
                            </li>
                            <li
                              onClick={e => {
                                onClick(e);
                              }}
                            >
                              <Link to="/contact">Contact</Link>
                            </li>
                            <li
                              onClick={e => {
                                onClick(e);
                              }}
                            >
                              <Link to="/blog">Blog</Link>
                            </li>
                            <li
                              onClick={e => {
                                onClick(e);
                              }}
                            >
                              {!loading && (
                                <Fragment>
                                  {isAuthenticated ? (
                                    <Link
                                      onClick={() => {
                                        logout();
                                      }}
                                    >
                                      Log Out
                                    </Link>
                                  ) : (
                                    <Link to="/register">Register</Link>
                                  )}
                                </Fragment>
                              )}
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { logout })(Header);
