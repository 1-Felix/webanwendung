// with Auth ist ein Higher Order Component (hoc)
// Ein hoc ist eine Funktion die eine andere Komponetente umschließt
// https://reactjs.org/docs/higher-order-components.html

// Die Komopnente die die hoc umschließt soll nur angzeigt werden, wenn der Nutzer eingeloggt ist.

import React, { Component } from "react";
import { connect } from "react-redux";

export default function withAuth(ComponentToBeRendered) {
  class Authenticate extends Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.history("/signup");
      }
    }
    // Wenn sich State ändert, muss auch gecheckt werden, ob der User (immernoch) eingeloggt ist.
    componentWillUpdate(nextProps) {
      if (!nextProps.props.isAuthenticated) {
        this.props.history("/signup");
      }
    }
    render() {
      return <ComponentToBeRendered {...this.props} />;
    }
  }
  function mapStateToProps(state) {
    return {
      isAuthenticated: state.currentUser.isAuthenticated
    };
  }
  return connect(mapStateToProps)(Authenticate);
}
