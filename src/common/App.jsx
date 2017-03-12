import React, { Component, PropTypes } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from './store';
import Dashboard from './dashboard';
import Setup from './setup';
import Site from './site';

class App extends Component {
  static propTypes = {
    siteMeta: PropTypes.shape({
      setupRequired: PropTypes.bool,
      error: PropTypes.error,
    }),
    dispatch: PropTypes.func.isRequired,
  }

  static defaultProps = {
    siteMeta: null,
  }

  componentDidMount() {
    if (!this.props.siteMeta) this.props.dispatch(actions.fetchSiteMeta());
  }

  render() {
    const pendingSiteMeta = this.props.siteMeta === null;
    if (pendingSiteMeta) return <div />;

    if (this.props.siteMeta.error) return <div>{this.props.siteMeta.error.toString()}</div>;

    return (
      <div>
        {this.props.siteMeta.setupRequired &&
          <Setup />
        }

        {!this.props.siteMeta.setupRequired &&
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" component={Site} />
          </Switch>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  siteMeta: state.siteMeta,
});

export default connect(mapStateToProps)(App);
