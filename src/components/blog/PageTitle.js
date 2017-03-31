import { PropTypes } from 'react';
import { breakpoints, spacing } from './styles';

const PageTitle = (props) => {
  const styles = {
    color: props.color,
  };

  return (
    <h1 style={styles}>
      {props.title}

      <style jsx>{`
        h1 {
          padding-bottom: ${spacing.phone * 2}px;
          font-size: 1.0rem;
          text-transform: uppercase;
          letter-spacing: 0.2rem;
          font-weight: 800;
        }

        @media ${breakpoints.tablet} {
          h1 {
            padding-bottom: ${spacing.tablet * 2}px;
          }
        }
      `}</style>
    </h1>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default PageTitle;
