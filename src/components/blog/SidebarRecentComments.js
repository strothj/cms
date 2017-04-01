import { PropTypes } from 'react';
import { connect } from 'react-redux';

import SidebarList from './SidebarList';
import Link from './Link';

const SidebarRecentComments = (props) => {
  const items = props.comments.map(comment => (
    {
      key: comment.id,
      children: (
        <span>
          {comment.user}
          &nbsp; on &nbsp;
          <Link href={comment.href}>{comment.post}</Link>
        </span>
      ),
    }
  ));

  return (
    <SidebarList title="Recent Comments" items={items} />
  );
};

SidebarRecentComments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    user: PropTypes.string,
    post: PropTypes.string,
    href: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = ({
  recent: { comments },
}) => ({
  comments,
});

export default connect(mapStateToProps)(SidebarRecentComments);
