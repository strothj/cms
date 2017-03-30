import { PropTypes } from 'react';
import { breakpoints, gutters } from '../shared';

const Wrapper = props => (
  <div className="wrapper">
    <style jsx>{`
      div {
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
        padding-left: ${gutters.FOR_PHONE}px;
        padding-right: ${gutters.FOR_PHONE}px;
      }

      @media ${breakpoints.FOR_TABLET} {
        div {
        padding-left: ${gutters.FOR_TABLET_OR_DESKTOP}px;
        padding-right: ${gutters.FOR_TABLET_OR_DESKTOP}px;
        }
      }
    `}</style>
    {props.children}
  </div>
);

Wrapper.propTypes = { children: PropTypes.node.isRequired };

export default Wrapper;
