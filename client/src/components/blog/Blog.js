import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../../actions/post";
import SingleBlog from "./SingleBlog";
import Spinner from "../layout/Spinner";

const Blog = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return loading ? (
    <Spinner />
  ) : (
    <main className="page-content">
      <div className="content-wraper section-pb section-pt-90">
        <div className="container">
          <div className="row">
            {posts.map(post => (
              <SingleBlog key={post._id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

Blog.propTypes = {
  post: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Blog);
