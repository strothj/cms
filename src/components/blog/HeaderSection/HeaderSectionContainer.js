import { connect } from 'react-redux';
import HeaderSection from './HeaderSection';

const mapStateToProps = ({
  routeName,
}) => ({
  large: routeName === 'index',
});

export default connect(mapStateToProps)(HeaderSection);
