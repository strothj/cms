import { connect } from 'react-redux';
import HeaderBranding from './HeaderBranding';

const mapStateToProps = ({
  siteTitle,
  tagline,
  theme: { headerColor, headerFont },
}) => ({
  siteTitle,
  tagline,
  color: headerColor,
  font: headerFont,
});

export default connect(mapStateToProps)(HeaderBranding);
