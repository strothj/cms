import { PropTypes } from 'react';
import { connect } from 'react-redux';

// import { breakpoints, spacing } from './styles';
import Post, { postPropType } from './Post';

const PostList = (props) => {
  const posts = props.posts.map(post => (
    <Post post={post} key={post.id} />
  ));

  return (
    <section>
      {posts}

      <style jsx>{`
      `}</style>
    </section>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(postPropType)).isRequired,
};

const mapStateToProps = state => ({
  posts: state.posts,
});

export default connect(mapStateToProps)(PostList);
