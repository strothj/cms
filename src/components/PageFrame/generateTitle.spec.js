import { expect } from 'chai';
import generateTitle from './generateTitle';

describe('PageFrame generateTitle', () => {
  it('returns page title from context', () => {
    const tests = [
      ['', {}],
      ['Site - Tagline', { routeName: 'index', siteTitle: 'Site', tagline: 'Tagline' }],
      ['Site', { routeName: 'index', siteTitle: 'Site' }],
      ['', { routeName: 'index' }],
    ];

    tests.forEach(t => expect(generateTitle(t[1])).to.equal(t[0]));
  });
});
