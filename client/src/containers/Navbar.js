import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import Typical from "react-typical";

class Navbar extends Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  };
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
          <div className="pt-3">
            <p>
              {this.props.currentUser.isAuthenticated ? (
                <Typical
                  steps={[
                    "You made it! You are now logged in. 🔒",
                    2000,
                    `You're username is ${this.props.currentUser.user.username}. 👀`,
                    1500,
                    "What a great choice! 😊",
                    800,
                    "You can now write, edit and delete your messages. ✏", 500
                  ]}
                />
              ) : (
                <Typical
                  steps={[
                    " ",
                    5000,
                    "Hey there! 😃",
                    1000,
                    "I'm Felix Keller.",
                    500,
                    "This app was developed as part of a project at the DHBW-Mosbach",
                    400,
                    "Sign up now, to discover all the functionalities 🌈",
                    1100
                  ]}
                />
              )}
            </p>
          </div>
          {this.props.currentUser.isAuthenticated ? (
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link
                  to={`/users/${this.props.currentUser.user.id}/messages/new`}
                >
                  New Message
                </Link>
              </li>
              <li>
                {/* Wenn sich ausgeloggt wird, wird der Token im LocalStorage gelöscht.*/}
                <a onClick={this.logout}>Log out</a>
              </li>
            </ul>
          ) : (
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/signup">Sign-Up</Link>
              </li>
              <li>
                <Link to="/signin">Sign-In</Link>
              </li>
            </ul>
          )}
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
  { logout }
)(Navbar);
