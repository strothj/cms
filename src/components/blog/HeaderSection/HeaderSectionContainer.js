import { connect } from 'react-redux';
import HeaderSection from './HeaderSection';

const mapStateToProps = ({
  routeName,
  siteTitle,
  tagline,
  theme: { headerFont, headerColor },
}) => ({
  large: routeName === 'index',
  siteTitle,
  tagline,
  font: headerFont,
  color: headerColor,
});

export default connect(mapStateToProps)(HeaderSection);
