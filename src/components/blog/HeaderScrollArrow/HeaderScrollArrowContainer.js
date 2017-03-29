import { connect } from 'react-redux';
import HeaderScrollArrow from './HeaderScrollArrow';

const mapStateToProps = ({
  theme: { headerColor },
}) => ({
  color: headerColor,
});

export default connect(mapStateToProps)(HeaderScrollArrow);
