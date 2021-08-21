import React, { useEffect } from "react";
import Spinner from "../layout/Spinner";
import SinglePost from "./SinglePost";
import PropTypes from "prop-types";
import { getThreePost } from "../../actions/post";
import { connect } from "react-redux";

const LatestNews = ({ threePosts, loading, getThreePost }) => {
  useEffect(() => {
    getThreePost();
    console.log("created");
  }, [getThreePost]);
  return loading ? (
    <Spinner />
  ) : (
    <div className="our-blog-area bg-light-grey section-ptb">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 ml-auto mr-auto">
            <div className="section-title">
              <h4>NEWS & UPDATES</h4>
              <h2>
                Our Latest <span>News</span>
              </h2>
              <p>
                We offer a full range of support services so that we meet the
                needs clients in relation with the structure of their entire
                organization.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {threePosts.map(post => (
            <SinglePost key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};
LatestNews.propTypes = {
  getThreePost: PropTypes.func.isRequired,
  threePosts: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  threePosts: state.post.threePosts,
  loading: state.post.loading
});

export default connect(mapStateToProps, { getThreePost })(LatestNews);
