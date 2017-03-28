import { connect } from 'react-redux';
import HeaderImage from './HeaderImage';

const mapStateToProps = ({
  theme: { headerImage },
  routeName,
}) => ({ headerImage, routeName });

export default connect(mapStateToProps)(HeaderImage);
