import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <div className="navbar-header">
            {/* für Basic Routing in React
            https://knowbody.github.io/react-router-docs/api/Link.html */}
            <Link to="/" className="navbar-brand">
              <div style={{ width: 2.5 + "rem" }}>
                <div className="logo-svg"></div>
              </div>
            </Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/signup">Registrieren</Link>
            </li>
            <li>
              <Link to="/signin">Einloggen</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(
  mapStateToProps,
  null
)(Navbar);
