import { PropTypes } from 'react';
import { connect } from 'react-redux';

import SidebarList from './SidebarList';
import Link from './Link';

const SidebarRecentPosts = (props) => {
  const items = props.posts.map(post => (
    {
      key: post.id,
      children: <Link href={post.href}>{post.title}</Link>,
    }
  ));

  return (
    <SidebarList title="Recent Posts" items={items} />
  );
};

SidebarRecentPosts.propTypes = {
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

export default connect(mapStateToProps)(SidebarRecentPosts);
