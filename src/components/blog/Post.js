import { PropTypes } from 'react';

import { breakpoints, spacing } from './styles';

const Post = (props) => {
  console.log(); // eslint-disable-line no-console

  return (
    <article>
      <header>
        <h1>{props.post.title}</h1>
      </header>
      <main>
        {}
      </main>

    </article>
  );
};

export const postPropType = {
  id: PropTypes.string,
  title: PropTypes.string,
  permalink: PropTypes.string,
  content: PropTypes.string,
};

Post.propTypes = {
  post: PropTypes.shape(postPropType).isRequired,
};

export default Post;
