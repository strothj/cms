import { PropTypes } from 'react';
import { Converter as MarkdownToHtmlConverter } from 'showdown';
import { Parser as HtmlToReactParser } from 'html-to-react';

import { breakpoints, spacing } from './styles';

const Post = (props) => {
  const converter = new MarkdownToHtmlConverter();
  converter.setOption('noHeaderId', true);
  const htmlToReactParser = new HtmlToReactParser();

  const html = converter.makeHtml(props.post.content);
  const reactHtml = htmlToReactParser.parse(html);

  return (
    <article className="post-content">
      <header>
        <h1>{props.post.title}</h1>
      </header>
      <main>
        {reactHtml}
      </main>

      <style jsx global>{`
        .post-content img, pre, code {
          display: block;
          width: 100%;
        }
      `}</style>
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
