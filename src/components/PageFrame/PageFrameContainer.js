import { connect } from 'react-redux';
import PageFrame from './PageFrame';

const mapStateToProps = ({
  routeName, siteTitle, tagline,
  theme: { fonts },
}) => ({
  routeName, siteTitle, tagline, fonts,
});

export default connect(mapStateToProps)(PageFrame);
