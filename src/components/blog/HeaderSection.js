import { PropTypes } from 'react';
import { connect } from 'react-redux';

import { breakpoints } from './styles';
import HeaderBranding from './HeaderBranding';
import HeaderScrollArrow from './HeaderScrollArrow';

const HeaderSection = props => (
  <header
    className={props.large ? 'header-large' : null}
    style={{ backgroundImage: `url(${props.background})` }}
  >
    <div>
      <HeaderBranding />
    </div>
    {props.large &&
      <HeaderScrollArrow />
    }

    <style jsx>{`
      header {
        position: relative;
        background: center/cover no-repeat
      }

      .header-large {
        height: 75vh;
        background-attachment: fixed;
      }

      .header-large div {
        position: absolute;
        width: 100%;
        bottom: 0;
      }

      @media ${breakpoints.tablet} {
        .header-large { height: 100vh; }
      }

      /* Darken section behind header branding */
      header::before {
        position: absolute;
        display: block;
        bottom: 0;
        width: 100%;
        height: 33%;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 75%, rgba(0, 0, 0, 0.3) 100%);
        content: "";
      }
    `}</style>
  </header>
);

HeaderSection.propTypes = {
  background: PropTypes.string.isRequired,
  large: PropTypes.bool,
};

HeaderSection.defaultProps = {
  large: true,
};

const mapStateToProps = ({
  theme: { headerImage },
  routeName,
}) => ({
  background: headerImage,
  large: routeName === 'index',
});

export default connect(mapStateToProps)(HeaderSection);
