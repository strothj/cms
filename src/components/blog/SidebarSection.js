import { connect } from 'react-redux';

import SearchWidget from './SearchWidget';
import ListWidget, { itemsPropType } from './ListWidget';

const SidebarSection = props => (
  <div>
    <SearchWidget />
    <ListWidget title="Recent Posts" items={props.posts} />
    <ListWidget title="Recent Comments" items={props.comments} />
    <ListWidget title="Archives" items={props.archives} />
    <ListWidget title="Categories" items={props.categories} />
    <ListWidget title="Links" items={props.links} />
  </div>
);

SidebarSection.propTypes = {
  posts: itemsPropType,
  comments: itemsPropType,
  archives: itemsPropType,
  categories: itemsPropType,
  links: itemsPropType,
};

SidebarSection.defaultProps = {
  posts: [],
  comments: [],
  archives: [],
  categories: [],
  links: [],
};

const mapStateToProps = state => ({
  posts: state.recent.posts,
  comments: state.recent.comments,
  archives: state.recent.archives,
  categories: state.recent.archives,
  links: state.recent.links,
});

export default connect(mapStateToProps)(SidebarSection);
