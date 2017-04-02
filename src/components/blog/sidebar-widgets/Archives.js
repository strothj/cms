import { PropTypes } from 'react';
import { connect } from 'react-redux';

import ListWidget from './ListWidget';
import Link from '../Link';

const Archives = (props) => {
  const archives = props.archives.map(archive => (
    {
      key: archive.id,
      children: <Link href={archive.href}>{archive.title}</Link>,
    }
  ));

  return (
    <ListWidget title="Archives" items={archives} />
  );
};

Archives.propTypes = {
  archives: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    href: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = ({
  recent: { archives },
}) => ({
  archives,
});

export default connect(mapStateToProps)(Archives);
