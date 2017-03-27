import { connect } from 'react-redux';
import PageFrame from './PageFrame';

const mapStateToProps = ({ app: { routeName, siteTitle, tagline } }) => ({
  routeName, siteTitle, tagline,
});

export default connect(mapStateToProps)(PageFrame);
