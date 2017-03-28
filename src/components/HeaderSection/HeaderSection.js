import { PropTypes } from 'react';
import * as breakpoints from '../breakpoints';
import HeaderImage from '../HeaderImage';
import Wrapper from '../Wrapper';

const HeaderSection = (props) => {
  const classes = props.large ? 'header-section--size-large' : '';
  const style = {
    fontFamily: props.font,
  };

  return (
    <header className={classes} style={style}>
      <style jsx>{`
        header {
          position: relative;
        }

        header::before {
          position: absolute;
          display: block;
          bottom: 0;
          width: 100%;
          height: 33%;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 75%, rgba(0, 0, 0, 0.3) 100%);
          content: "";
        }

        h1, h2 { margin: 0; }

        div {
          position: absolute;
          bottom: 0;
          width: 100%;
        }

        @media (min-width: ${breakpoints.FOR_TABLETS_PORTRAIT_AND_UP}) {
          .header-section--size-large {
            height: 100vh;
          }
        }
      `}</style>
      <HeaderImage />
      <div>
        <Wrapper>
          <h1>{props.siteTitle}</h1>
          <h2>{props.tagline}</h2>
        </Wrapper>
      </div>
    </header>
  );
};

HeaderSection.propTypes = {
  font: PropTypes.string.isRequired,
  siteTitle: PropTypes.string,
  tagline: PropTypes.string,
  large: PropTypes.bool,
};
HeaderSection.defaultProps = {
  siteTitle: '',
  tagline: '',
  large: false,
};

export default HeaderSection;
