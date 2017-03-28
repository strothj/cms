import { PropTypes } from 'react';
import { breakpoints } from '../shared';

const BlogWrapper = props => (
  <div className="blog-wrapper">
    <style jsx global>{`
    h1, p { margin: 0; }

    h1 {
      font-size: 1.5rem;
      font-weight: 800;
    }

    a {
      color: inherit;
      text-decoration: none;
      border-bottom: solid 5px transparent;
      transition: border-bottom .2s;
    }

    a:hover {
      border-bottom: solid 5px;
    }

    @media (min-width: ${breakpoints.FOR_TABLETS_PORTRAIT_AND_UP}) {
      h1 { font-size: 2.25rem; }
    }
    `}</style>
    {props.children}
  </div>
);

BlogWrapper.propTypes = { children: PropTypes.node.isRequired };

export default BlogWrapper;
