import { PropTypes } from 'react';
import { breakpoints, spacing } from './styles';

const Row = props => (
  <div>
    <style jsx>{`
      div {
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
        padding: 0 ${spacing.phone}px;
      }

      @media ${breakpoints.tablet} {
        div { padding: 0 ${spacing.tablet}px; }
      }
    `}</style>
    {props.children}
  </div>
);

Row.propTypes = { children: PropTypes.node.isRequired };

export default Row;
