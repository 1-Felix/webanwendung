// Eine Komponente um sich zu registrieren UND einzuloggen
import React, { Component } from "react";

export default class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      profileImageUrl: ""
    };
  }

  // Damit die Input-Felder korrekt funktionieren
  // https://stackoverflow.com/questions/1184123/is-it-possible-to-add-dynamically-named-properties-to-javascript-object?rq=1
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { email, username, password, profileImageUrl } = this.state;
    const { heading, buttonText, signup } = this.props;
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
              {/* Wenn props.signup existiert, dann zeige die zwei weiteren Input-Felder an */}
              {signup && (
                <div>
                  <label htmlFor="Username">Username:</label>
                  <input
                    type="text"
                    name="Username"
                    id="Username"
                    className="form-control"
                    onChange={this.handleChange}
                    value={username}
                  />
                  <label htmlFor="image-url">Image-URL:</label>
                  <input
                    type="text"
                    name="image-url"
                    id="image-url"
                    className="form-control"
                    onChange={this.handleChange}
                    value={profileImageUrl}
                  />
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}
