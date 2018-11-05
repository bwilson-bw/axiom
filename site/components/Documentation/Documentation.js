import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Components from './Resources/Components';
import './Documentation.css';

export default class Documentation extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  static childContextTypes = {
    push: PropTypes.func.isRequired,
  };

  getChildContext() {
    return {
      push: this.props.history.push,
    };
  }

  render() {

    return (
      <div className="si-documentation">
        <div className="si-documentation__body">
          <Switch>
            <Route component={ Components } path="/docs/packages/axiom-components" />
          </Switch>
        </div>
      </div>
    );
  }
}
