import { PropTypes } from 'react';
import { breakpoints } from '../../shared';
import HeaderImage from '../HeaderImage';
import HeaderBranding from '../HeaderBranding';

const HeaderSection = (props) => {
  const classes = props.large ? 'header-section--size-large' : '';

  return (
    <header className={classes}>
      <style jsx>{`
        header {
          position: relative;
        }

        header :global(.header-branding) {
          position: absolute;
          bottom: 0;
          width: 100%;
        }

        .header-section--size-large {
          height: 85vh;
        }

        @media (min-width: ${breakpoints.FOR_TABLETS_PORTRAIT_AND_UP}) {
          .header-section--size-large {
            height: 100vh;
          }
        }
      `}</style>

      {/* Darken section behind HeaderBranding */}
      <style jsx>{`
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

      <HeaderImage />
      <HeaderBranding />
    </header>
  );
};

HeaderSection.propTypes = { large: PropTypes.bool };
HeaderSection.defaultProps = { large: false };

export default HeaderSection;
