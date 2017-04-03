import { PropTypes } from 'react';
import { Converter as MarkdownToHtmlConverter } from 'showdown';
import { Parser as HtmlToReactParser } from 'html-to-react';

import { breakpoints, spacing } from './styles';
import PostHeader from './PostHeader';

const Post = (props) => {
  const converter = new MarkdownToHtmlConverter();
  converter.setOption('prefixHeaderId', props.post.permalink);
  const html = converter.makeHtml(props.post.content);

  const htmlToReactParser = new HtmlToReactParser();
  const markdownNodes = htmlToReactParser.parse(html);


  return (
    <article>
      <PostHeader {...props.post} selected={props.post.selected} />
      <main className="post-content">
        {markdownNodes}
      </main>

      <style jsx>{`
        article {
          padding-bottom: ${spacing.phone * 4}px;
        }

        @media ${breakpoints.tablet} {
          article {
            padding-bottom: ${spacing.tablet * 4}px;
          }
        }
      `}</style>

      <style jsx global>{`
        .post-content img {
          width: 100%;
        }
      `}</style>
    </article>
  );
};

export const postPropType = {
  publishTimestamp: PropTypes.number,
  title: PropTypes.string,
  permalink: PropTypes.string,
  featuredImage: PropTypes.string,
  featuredImageCaption: PropTypes.string,
  content: PropTypes.string,
};

Post.propTypes = {
  post: PropTypes.shape(postPropType).isRequired,
  selected: PropTypes.bool,
};

Post.defaultProps = { selected: false };

export default Post;
