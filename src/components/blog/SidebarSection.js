import { RecentComments, RecentPosts, Search } from './sidebar-widgets';

const SidebarSection = () => (
  <div>
    <Search />
    <RecentPosts />
    <RecentComments />
  </div>
);

export default SidebarSection;
