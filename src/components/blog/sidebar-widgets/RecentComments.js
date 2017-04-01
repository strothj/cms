import { PropTypes } from 'react';
import { connect } from 'react-redux';

import ListWidget from './ListWidget';
import Link from '../Link';

const RecentComments = (props) => {
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
    <ListWidget title="Recent Comments" items={items} />
  );
};

RecentComments.propTypes = {
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

export default connect(mapStateToProps)(RecentComments);
