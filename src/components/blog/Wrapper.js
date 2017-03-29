import { PropTypes } from 'react';
import { breakpoints, gutters } from '../shared';

const Wrapper = props => (
  <div className="wrapper">
    <style jsx>{`
      div {
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
        padding-left: ${gutters(breakpoints.FOR_PHONES_ONLY)};
        padding-right: ${gutters(breakpoints.FOR_PHONES_ONLY)};
      }

      @media ${breakpoints.FOR_TABLET} {
        div {
        padding-left: ${gutters(breakpoints.FOR_TABLET)};
        padding-right: ${gutters(breakpoints.FOR_TABLET)};
        }
      }
    `}</style>
    {props.children}
  </div>
);

Wrapper.propTypes = { children: PropTypes.node.isRequired };

export default Wrapper;
