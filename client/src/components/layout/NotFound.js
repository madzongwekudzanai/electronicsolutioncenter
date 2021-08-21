import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="page-content section-ptb">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 ml-auto mr-auto text-center">
            <div className="search-error-wrapper">
              <h1>404</h1>
              <h4>PAGE NOT FOUND</h4>
              <p className="home-link">
                Sorry but the page you are looking for does not exist, have been
                removed, name changed or is temporarity unavailable.
              </p>
              <Link to="/" className="home-bacck-button">
                Back to home page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
