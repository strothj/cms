import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import { actions, makeStore } from '../src/store';
import { PageFrame } from '../src/components/shared';
import { HeaderSection } from '../src/components/blog';

class IndexPage extends Component {
  static async getInitialProps({ store }) {
    // TODO: Prevent multiple unnecessary fetches when navigating between pages.
    console.log('IndexPage: getInitialProps'); // eslint-disable-line no-console
    store.dispatch(actions.setRouteName('index'));
    await Promise.all([
      store.dispatch(actions.fetchSiteMeta()),
      store.dispatch(actions.fetchTheme()),
    ]);
    return {};
  }

  render() {
    return (
      <PageFrame>
        <HeaderSection />
        <img src="https://placekitten.com/350/350" alt="placeholder" />
      </PageFrame>
    );
  }
}

export default withRedux(makeStore)(IndexPage);
