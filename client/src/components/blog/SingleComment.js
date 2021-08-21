import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteComment } from "../../actions/post";

const SingleComment = ({
  comment: { text, name, avatar, date, _id, user },
  id,
  deleteComment,
  auth
}) => {
  return (
    <div className="pro_review mb-4">
      <div className="review_thumb">
        <img height="55.19px" width="55.19px" src={avatar} alt="" />
      </div>
      <div className="review_details">
        <div className="review-info">
          <h4>
            <Link to={`/blog/${id}`}>{name}</Link>
          </h4>
          <div className="rating_send">
            {auth.user && (
              <Fragment>
                {!auth.loading && user === auth.user._id && (
                  <Link>
                    <i
                      onClick={e => {
                        deleteComment(id, _id);
                      }}
                      className="fa fa-trash"
                    ></i>
                  </Link>
                )}
              </Fragment>
            )}
          </div>
        </div>
        <div className="review-date">
          <span>
            <Moment format="DD MMM, YYYY">{date}</Moment> at{" "}
            <Moment format="hh:mm a">{date}</Moment>
          </span>
        </div>
        <p className="blog-text">{text}</p>
      </div>
    </div>
  );
};

SingleComment.propTypes = {
  comment: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(SingleComment);
