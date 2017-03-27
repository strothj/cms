import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import { actions, makeStore } from '../src/store';
import PageFrame from '../src/components/PageFrame';

class IndexPage extends Component {
  static async getInitialProps({ store }) {
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
        <span>Hello world!</span>
      </PageFrame>
    );
  }
}

export default withRedux(makeStore)(IndexPage);
