import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const SingleBlog = ({ post: { _id, title, date, blogImage } }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="our-single-blog mt--30">
        <div className="our-single-blog-image">
          <Link to={`/blog/${_id}`}>
            <img src={`/blog/${blogImage}`} alt="" />
          </Link>
          <span className="post-date">
            <Moment format="DD MMM">{date}</Moment>
          </span>
        </div>
        <div className="our-single-blog-contents">
          <h3>
            <Link to={`/blog/${_id}`}>{title}</Link>
          </h3>
          <div className="meta-body">
            <ul>
              <li>PC Repair</li>
              <li>
                By: <Link to={`/blog/${_id}`}>Admin</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleBlog.propTypes = {
  post: PropTypes.object.isRequired
};

export default SingleBlog;
