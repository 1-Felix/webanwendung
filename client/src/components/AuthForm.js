// Eine Komponente um sich zu registrieren UND einzuloggen
import React, { Component } from "react";

export default class AuthForm extends Component {
  constructor(props) {
    this.state = {
      email: "",
      username: "",
      password: "",
      profileImageUrl: ""
    };
  }

  render() {
    const { email, username, password, profileImageUrl } = this.state;
    const { heading, buttonText } = this.props;
    return (
      <div>
        <div className="row justify-content-md-center text-center">
          <div className="col-md-6">
            <form onSubmit={this.handleSubmit}>
              <h2>{heading}</h2>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="email"
                id="email"
                className="form-control"
                onChange={this.handleChange}
                value={email}
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                onChange={this.handleChange}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
