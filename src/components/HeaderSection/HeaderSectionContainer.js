import { connect } from 'react-redux';
import HeaderSection from './HeaderSection';

const mapStateToProps = ({
  routeName,
  siteTitle,
  tagline,
  theme: { headerFont },
}) => ({
  large: routeName === 'index',
  siteTitle,
  tagline,
  font: headerFont,
});

export default connect(mapStateToProps)(HeaderSection);
