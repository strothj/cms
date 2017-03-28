import { PropTypes } from 'react';
import Link from 'next/link';
import Color from 'color';
import { breakpoints } from '../../shared';
import Wrapper from '../Wrapper';

const HeaderBranding = (props) => {
  const style = {
    fontFamily: props.font,
    color: props.color,
  };

  // github.com/zeit/styled-jsx doesn't support dynamic changes from props.
  // Adding a custom style element to be able to manipulate the hover state.
  const blurColor = `
    .header-branding a:hover {
      color: ${Color(props.color).darken(0.2).hsl().string()};
    }
  `;

  return (
    <section className="header-branding" style={style}>
      <style jsx>{`
        section { padding-bottom: 24px; }

        h1 { text-transform: uppercase; }

        a {
          border-bottom: none;
          transition: color .2s;
        }

        @media (min-width: ${breakpoints.FOR_TABLETS_PORTRAIT_AND_UP}) {
          section { padding-bottom: 48px; }
        }
      `}</style>
      <style>{blurColor}</style>

      <Wrapper>
        <h1>
          <Link href="/">
            <a href="/">{props.siteTitle}</a>
          </Link>
        </h1>
        <p>{props.tagline}</p>
      </Wrapper>
    </section>
  );
};

HeaderBranding.propTypes = {
  siteTitle: PropTypes.string,
  tagline: PropTypes.string,
  font: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

HeaderBranding.defaultProps = {
  siteTitle: '',
  tagline: '',
};

export default HeaderBranding;
