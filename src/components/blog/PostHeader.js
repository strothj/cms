import { PropTypes } from 'react';
import moment from 'moment';

import { breakpoints, spacing } from './styles';
import Link from './Link';

const PostHeader = (props) => {
  const date = moment.unix(props.publishTimestamp);
  const formattedDate = date.format('MMMM D, YYYY');

  const postLink = `/${date.format('YYYY')}/${date.format('MM')}/${props.permalink}`;

  let time;
  if (props.selected) time = formattedDate;
  else time = <Link href={postLink}>{formattedDate}</Link>;

  let h1;
  if (props.selected) h1 = props.title;
  else h1 = <Link href={postLink}>{props.title}</Link>;

  return (
    <header>
      <time>{time}</time>
      <h1>{h1}</h1>
      {!props.selected && props.featuredImage &&
        <figure>
          <img src={props.featuredImage} alt={props.featuredImageCaption} />
          {props.featuredImageCaption &&
            <figcaption>{props.featuredImageCaption}</figcaption>
          }
        </figure>
      }

      <style jsx>{`
        time {
          font-size: .9rem;
          font-weight: 800;
          opacity: .7;
          letter-spacing: .1rem;
        }

        h1 {
          font-size: 1.8rem;
          font-weight: 100;
        }

        figure { margin: 0; }

        figcaption {
          font-size: .8rem;
          font-style: italic;
          opacity: .8;
        }

        img { width: 100% }

        header {
          padding-bottom: ${spacing.phone}px;
        }

        @media ${breakpoints.tablet} {
          header {
            padding-bottom: ${spacing.tablet}px;
          }
        }
      `}</style>
    </header>
  );
};

PostHeader.propTypes = {
  selected: PropTypes.bool,
  publishTimestamp: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  permalink: PropTypes.string.isRequired,
  featuredImage: PropTypes.string,
  featuredImageCaption: PropTypes.string,
};

PostHeader.defaultProps = {
  selected: false,
  featuredImage: null,
  featuredImageCaption: null,
};

export default PostHeader;
