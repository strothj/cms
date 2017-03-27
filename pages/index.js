import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import { actions, makeStore } from '../src/store';
import PageFrame from '../src/components/PageFrame';

class IndexPage extends Component {
  static async getInitialProps({ store }) {
    store.dispatch(actions.setRouteName('index'));
    await store.dispatch(actions.fetchSiteMeta());
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
