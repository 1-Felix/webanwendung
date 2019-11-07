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
    this.props
      .onAuth(authType, this.state)
      .then(() => {
        // Wenn der User eingeloggt ist
        // "/" rendert die Homepage-Komponente neu
        this.props.history.push("/")
      })
      .catch(() => {
        return;
      });
  };

  render() {
    const { email, username, profileImageUrl } = this.state;
    const {
      heading,
      buttonText,
      signUp,
      errors,
      history,
      removeError
    } = this.props;

    // Sobald ein sich die URL ändert, wird die Error-Anzeige gelöscht
    history.listen(() => removeError());

    return (
      <div className="authFormContainer">
        <div className="row h-100 justify-content-md-center text-center align-items-center">
          <div className="col-md-6">
            <form onSubmit={this.handleSubmit} className="d-flex justify-content-left flex-column">
              <h2 className="formTitle">{heading}</h2>
              {/* Falls es Errors gibt, hier anzeigen */}
              {errors.message && (
                <div className="alert alert-danger">{errors.message}</div>
              )}
              <label htmlFor="email" className="align-self-start" >Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                onChange={this.handleChange}
                value={email}
              />
              <label htmlFor="password" className="align-self-start">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                onChange={this.handleChange}
              />
              {/* Wenn props.signup existiert, dann zeige die zwei weiteren Input-Felder an */}
              {signUp && (
                <div className="d-flex flex-column">
                  <label htmlFor="Username" className="align-self-start">Username:</label>
                  <input
                    type="text"
                    name="username"
                    id="Username"
                    className="form-control"
                    value={username}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="image-url" className="align-self-start">Image-URL:</label>
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
              <button
                type="submit"
                className="btn btn-dark btn-block btn-lg mt-3"
              >
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
