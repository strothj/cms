import { PropTypes } from 'react';
import * as breakpoints from './breakpoints';

const Wrapper = props => (
  <div className="wrapper">
    <style jsx>{`
      div {
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
        padding-left: 10px;
        padding-right: 10px;
      }

      @media (min-width: ${breakpoints.FOR_TABLETS_PORTRAIT_AND_UP}) {
        div {
          padding-left: 20px;
          padding-right: 20px;
        }
      }
    `}</style>
    {props.children}
  </div>
);

Wrapper.propTypes = { children: PropTypes.node.isRequired };

export default Wrapper;
