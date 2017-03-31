import { PropTypes } from 'react';
import { connect } from 'react-redux';

import { breakpoints, spacing } from './styles';
import Row from './Row';
import Link from './Link';

const HeaderBranding = (props) => {
  const style = {
    fontFamily: props.font,
    color: props.color,
  };

  return (
    <section style={style}>
      <Row>
        <h1>
          <Link href="/" fade>{props.siteTitle}</Link>
        </h1>
        <p>{props.tagline}</p>
      </Row>

      <style jsx>{`
        section {
          padding: ${spacing.phone * 2}px 0;
        }

        h1 {
          text-transform: uppercase;
          font-size: 2rem;
        }

        p { font-size: .8rem }

        @media ${breakpoints.tablet} {
          section { padding: ${spacing.tablet * 2}px 0; }

          h1 { font-size: 3rem; }

          p { font-size: 1rem; }
        }
      `}</style>
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
