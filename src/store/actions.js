import ApiClient from '../api/client';

let apiClient;
if (typeof window !== 'object') {
  const port = process.env.PORT || 3000;
  apiClient = new ApiClient(`http://localhost:${port}/api`);
} else { apiClient = new ApiClient(); }

export const SET_ROUTE_NAME = 'SET_ROUTE_NAME';
export const FETCH_SITE_META = 'FETCH_SITE_META';
export const FETCH_SITE_META_SUCCESS = 'FETCH_SITE_META_SUCCESS';
export const FETCH_THEME = 'FETCH_THEME';
export const FETCH_THEME_SUCCESS = 'FETCH_THEME_SUCCESS';
export const FETCH_RECENT = 'FETCH_RECENT';
export const FETCH_RECENT_SUCCESS = 'FETCH_RECENT_SUCCESS';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';

export const setRouteName = routeName => ({
  type: SET_ROUTE_NAME,
  routeName,
});

export const fetchSiteMetaSuccess = ({ siteTitle, tagline }) => ({
  type: FETCH_SITE_META_SUCCESS,
  siteTitle,
  tagline,
});

export const fetchSiteMeta = () => dispatch => apiClient.metaGet()
  .then(({ siteTitle, tagline }) => {
    dispatch(fetchSiteMetaSuccess({ siteTitle, tagline }));
  });
  // TODO: Add error handling

export const fetchThemeSuccess = theme => ({
  type: FETCH_THEME_SUCCESS,
  theme,
});

export const fetchTheme = () => dispatch => apiClient.themeGet()
  .then((theme) => {
    dispatch(fetchThemeSuccess(theme));
  });
  // TODO: Add error handling

export const fetchRecentSuccess = recent => ({
  type: FETCH_RECENT_SUCCESS,
  recent,
});

export const fetchRecent = () => dispatch => apiClient.recentGet()
  .then((recent) => {
    dispatch(fetchRecentSuccess(recent));
  });
  // TODO: Add error handling

export const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  posts,
});

export const fetchPosts = () => dispatch => apiClient.postsGet()
  .then((posts) => {
    dispatch(fetchPostsSuccess(posts));
  });
  // TODO: Add error handling
