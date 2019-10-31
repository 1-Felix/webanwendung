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

  handleSubmit = e => {
    e.preventDefault();
    // auhthTpe ist nützlich um zu entscheiden was für ein Request abgeschickt werden soll
    const authType = this.props.signUp ? "signup" : "signin";
    this.props.onAuth(authType, this.state).then(() => {
      console.log("logged in")
    })
  }

  render() {
    const { email, username, password, profileImageUrl } = this.state;
    const { heading, buttonText, signUp } = this.props;
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
              {signUp && (
                <div>
                  <label htmlFor="Username">Username:</label>
                  <input
                    type="text"
                    name="username"
                    id="Username"
                    className="form-control"
                    value={username}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="image-url">Image-URL:</label>
                  <input
                    type="text"
                    name="profileImageUrl"
                    id="image-url"
                    className="form-control"
                    onChange={this.handleChange}
                    value={profileImageUrl}
                  />
                </div>
              )}
              <button type="submit" className="btn btn-dark btn-block btn-lg mt-3">
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
