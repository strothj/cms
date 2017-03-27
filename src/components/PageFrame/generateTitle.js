/**
 * Generates the page title.
 *
 * @param {Object} ctx - The page context.
 * @param {string} ctx.routeName - The route name, e.g. "index".
 * @param {string} ctx.siteTitle - The site title.
 * @param {string} ctx.tagline - The site's tagline.
 * @param {string} ctx.pageTitle - The page's title.
 * @returns {string}
 */
const generateTitle = (ctx = {}) => {
  if (ctx.routeName === 'index') {
    if (ctx.tagline) return `${ctx.siteTitle} - ${ctx.tagline}`;
    return ctx.siteTitle || '';
  }
  return '';
};

export default generateTitle;
