import { PropTypes } from 'react';
import { breakpoints, gutters } from '../shared';

const PageTitle = (props) => {
  const styles = {
    color: props.color,
  };

  return (
    <div className="page-header">
      <h1 className="page-title" style={styles}>{props.title}</h1>
      <style jsx>{`
        div {
          padding-bottom: ${gutters.FOR_PHONE * 2}px;
        }

        @media ${breakpoints.FOR_TABLET} {
          div {
            padding-bottom: ${gutters.FOR_TABLET_OR_DESKTOP * 2}px;
          }
        }

        h1 {
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 0.2rem;
          font-weight: 800;
        }
      `}</style>
    </div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default PageTitle;
