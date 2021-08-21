import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleLatest = ({ post: { title, blogImage, _id } }) => {
  return (
    <div className="widget-blog-inner">
      <div className="widget-blog-image">
        <Link to={`/blog/${_id}`}>
          <img src={`/blog/${blogImage}`} alt="" />
        </Link>
      </div>
      <div className="widget-blog-content text-left">
        <h3>
          <Link to={`/blog/${_id}`}>{title}</Link>
        </h3>
      </div>
    </div>
  );
};

SingleLatest.propTypes = {
  post: PropTypes.object.isRequired
};

export default SingleLatest;
