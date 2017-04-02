import { PropTypes } from 'react';

import { breakpoints, spacing } from './styles';
import Link from './Link';
import WidgetTitle from './WidgetTitle';

const ListWidget = (props) => {
  const items = props.items.map((item) => {
    const link = <Link href={item.href}>{item.title}</Link>;
    let li;

    if (item.pretext) {
      li = (
        <span>
          {item.pretext}
          &nbsp;
          {link}
        </span>
      );
    } else { li = link; }

    return (
      <li key={item.id}>
        {li}

        <style jsx>{`
          li {
            border-bottom: 1px solid #ddd;
            padding: ${spacing.phone / 2}px 0;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }`
        }</style>
      </li>
    );
  });

  return (
    <section>
      {props.title && <WidgetTitle title={props.title} /> }

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

export const itemsPropType = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.string,
  pretext: PropTypes.string,
  title: PropTypes.string,
  href: PropTypes.string,
}));

ListWidget.propTypes = {
  items: itemsPropType.isRequired,
  title: PropTypes.string,
};

ListWidget.defaultProps = {
  title: null,
};

export default ListWidget;
