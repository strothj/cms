import { connect } from 'react-redux';
import HeaderSection from './HeaderSection';

const mapStateToProps = ({ app: { routeName } }) => ({ routeName });

export default connect(mapStateToProps)(HeaderSection);
