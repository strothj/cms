import { PropTypes } from 'react';

const BlogWrapper = props => (
  <div className="blog-wrapper">
    {props.children}

    <style jsx global>{`
      h1, p { margin: 0; }
    `}</style>
  </div>
);

BlogWrapper.propTypes = { children: PropTypes.node.isRequired };

export default BlogWrapper;
