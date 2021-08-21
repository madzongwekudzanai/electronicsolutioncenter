import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import SingleLatest from "./SingleLatest";
import SingleComment from "./SingleComment";
import { getPost, getThreePost, addComment } from "../../actions/post";
import { connect } from "react-redux";
import Moment from "react-moment";

const BlogDetail = ({
  addComment,
  auth,
  match,
  getPost,
  getThreePost,
  post: { threePosts, loading },
  singlePost
}) => {
  useEffect(() => {
    getPost(match.params.id);
    getThreePost();
  }, [getPost, getThreePost]);
  const [text, setText] = useState("");
  const onChange = e => {
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    addComment(match.params.id, { text });
    setText("");
  };
  return loading || singlePost === null ? (
    <Spinner />
  ) : (
    <main className="page-content">
      <div className="content-wraper section-pb section-pt-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 order-2 order-lg-2">
              <div className="blog-widget-wrap">
                <div className="widget-blog blog-widget mt--30">
                  <h4 className="title">Recent POST</h4>
                  {threePosts.map(post => (
                    <SingleLatest key={post._id} post={post} />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-9 order-1 order-lg-1">
              <div className="blog-details-wrapper mt--30">
                <div className="blog-details-image">
                  <img src={`/blog/${singlePost.blogImage}`} alt="" />
                </div>
                <div className="postinfo-wrapper">
                  <div className="post-info">
                    <div className="meta-body">
                      <ul>
                        <li>
                          By: <Link to={`/blog/${match.params.id}`}>Admin</Link>
                        </li>
                        <li>
                          <Moment format="DD-MM-YY">{singlePost.date}</Moment>
                        </li>
                      </ul>
                    </div>
                    <h3>{singlePost.title}</h3>
                    <p>{singlePost.text}</p>
                    <div className="post-commet">
                      <Link
                        to={`/blog/${match.params.id}`}
                        className="blog-comment"
                      >
                        {singlePost.comments.length} COMMENTS
                      </Link>
                    </div>
                  </div>
                  <div className="review_address_inner">
                    {singlePost.comments.map(comment => (
                      <SingleComment
                        key={match.params.id}
                        comment={comment}
                        id={match.params.id}
                      />
                    ))}
                  </div>
                  {auth.isAuthenticated ? (
                    <div className="comments-area comments-reply-area">
                      <div className="row">
                        <div className="col-lg-12">
                          <h3 className="comment-reply-title">
                            Leave a Comment
                          </h3>
                          <form
                            onSubmit={e => {
                              onSubmit(e);
                            }}
                            className="comment-form-area"
                          >
                            <p className="comment-notes">
                              <span id="email-notes">
                                Your email address will not be published.
                              </span>{" "}
                              Required fields are marked{" "}
                              <span className="required">*</span>
                            </p>
                            <p className="comment-form-comment">
                              <label>Comment</label>
                              <textarea
                                type="text"
                                className="comment-notes"
                                required
                                value={text}
                                onChange={e => {
                                  onChange(e);
                                }}
                              ></textarea>
                            </p>
                            <div className="comment-input">
                              <p className="comment-form-author">
                                <label>
                                  Name <span className="required">*</span>
                                </label>
                                <input
                                  type="text"
                                  name="name"
                                  readOnly={true}
                                  value={auth.user.name}
                                />
                              </p>
                              <p className="comment-form-email">
                                <label>
                                  Email <span className="required">*</span>
                                </label>
                                <input
                                  type="email"
                                  name="email"
                                  readOnly={true}
                                  value={auth.user.email}
                                />
                              </p>
                            </div>
                            <div className="comment-form-submit">
                              <input
                                type="submit"
                                value="Post Comment"
                                className="comment-submit"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

BlogDetail.propTypes = {
  getPost: PropTypes.func.isRequired,
  getThreePost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  singlePost: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post,
  singlePost: state.post.post,
  auth: state.auth
});

export default connect(mapStateToProps, { getPost, getThreePost, addComment })(
  BlogDetail
);
