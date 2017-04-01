import { PropTypes } from 'react';

import { spacing } from './styles';

const SidebarTitle = props => (
  <header>
    <h1>{props.title}</h1>

    <style jsx>{`
      h1 {
        text-transform: uppercase;
        font-size: .85rem;
        letter-spacing: .2rem;
        padding-bottom: ${spacing.phone}px;
      }
    `}</style>
  </header>
);

SidebarTitle.propTypes = { title: PropTypes.string.isRequired };

export default SidebarTitle;
