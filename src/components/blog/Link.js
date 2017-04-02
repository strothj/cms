import { PropTypes } from 'react';
import NextLink from 'next/link';

const Link = props => (
  <NextLink href={props.href}>
    <a href={props.href} className={props.fade ? 'link-fade' : null}>
      {props.children}

      <style jsx>{`
        a {
          color: inherit;
          text-decoration: none;
          border-bottom: solid 5px transparent;
          transition: border-bottom 0.2s;
        }

        a:hover {
          border-bottom: solid 3px;
        }

        .link-fade {
          transition: opacity 0.2s;
        }

        .link-fade:hover {
          border-bottom: none;
          opacity: 0.5;
        }
      `}</style>
    </a>
  </NextLink>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  fade: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Link.defaultProps = { fade: false };

export default Link;
