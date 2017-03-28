import { PropTypes } from 'react';
import Link from 'next/link';

const Anchor = props => (
  <Link href={props.href}>
    <a {...props}>
      <style jsx>{`
        a {
          text-decoration: none;
        }
      `}</style>
      {props.children}
    </a>
  </Link>
);

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Anchor;
