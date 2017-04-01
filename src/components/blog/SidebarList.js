import { PropTypes } from 'react';

import { breakpoints, spacing } from './styles';
import SidebarTitle from './SidebarTitle';

const SidebarList = (props) => {
  const items = props.items.map(item => (
    <li key={item.key}>
      {item.children}

      <style jsx>{`
        li {
          display: block;
          border-bottom: 1px solid #ddd;
          padding: ${spacing.phone / 2}px 0;
        }`
      }</style>
    </li>
  ));

  return (
    <section>
      {props.title && <SidebarTitle title={props.title} /> }

      <main>
        <ul>
          {items}
        </ul>
      </main>

      <style jsx>{`
        section {
          padding-bottom: ${spacing.phone * 4}px;
        }

        @media ${breakpoints.tablet} {
          section {
            padding-bottom: ${spacing.tablet * 4}px;
          }
        }

        ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }
      `}</style>
    </section>
  );
};

SidebarList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    children: PropTypes.node,
  })).isRequired,
  title: PropTypes.string,
};

SidebarList.defaultProps = { title: null };

export default SidebarList;
