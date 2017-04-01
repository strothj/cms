import { PropTypes } from 'react';
import { connect } from 'react-redux';

import ListWidget from './ListWidget';
import Link from '../Link';

const RecentPosts = (props) => {
  const items = props.posts.map(post => (
    {
      key: post.id,
      children: <Link href={post.href}>{post.title}</Link>,
    }
  ));

  return (
    <ListWidget title="Recent Posts" items={items} />
  );
};

RecentPosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    href: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = ({
  recent: { posts },
}) => ({
  posts,
});

export default connect(mapStateToProps)(RecentPosts);
