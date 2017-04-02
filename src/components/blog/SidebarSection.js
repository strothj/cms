import {
  Archives,
  RecentComments,
  RecentPosts,
  Search,
} from './sidebar-widgets';

const SidebarSection = () => (
  <div>
    <Search />
    <RecentPosts />
    <RecentComments />
    <Archives />
  </div>
);

export default SidebarSection;
