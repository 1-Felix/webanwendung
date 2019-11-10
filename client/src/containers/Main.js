// Behinhaltet die Routing-Logik
import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
import withAuth from "../hocs/withAuth";
import MessageForm from "../containers/MessageForm";


const Main = props => {
  // Durch MapDispatchToProps habe ich Zugriff auf props.authUser
  // authUser dispached eine action (siehe ../store/actions/auth)
  const { authUser, errors, removeError, currentUser } = props;
  const UpdateForm = withAuth(MessageForm);
  return (
    <div className="container">
      {/* Erlaubt mehrere Routes */}
      <Switch>
        {/* Triggert nur wenn man genau auf der Root-Route ist */}
        {/* Es wird eine Funktion gerendert, die die Hompage rendert und die Props für's Routing übergibt */}
        <Route exact path="/" render={props => <Homepage currentUser={currentUser} {...props} />} />
        <Route
          exact
          path="/signin"
          render={props => {
            return (
              <AuthForm
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                buttonText="Login"
                heading="Welcome back."
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path="/signup"
          render={props => {
            return (
              <AuthForm
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                signUp
                buttonText="Register"
                heading="Become a part of the Community today."
                {...props}
              />
            );
          }}
        />
        {/* Wird nur agzeigt wenn der User eingeloggt ist  */}
        <Route path="/users/:id/messages/new" component={withAuth(MessageForm)} />
        <Route 
          path="/users/:id/messages/:message_id/update" 
          render={props => {
            return (
              <UpdateForm
              update
              heading="Update your Message:"
              btnText="Update my idea"
              {...props}
              />
            );
          }}
        />
      </Switch>
    </div>
  );
};

// Damit der State aus dem Redux-Store als Props an die Komponente weiteregegeben wird
// https://www.youtube.com/watch?v=IIMUXbkKzW0
function mapStateToProps(state) {
  return {
    // Die Nurtzer-Infos sind nützlich um nachher zu entscheiden ob Homepage (nicht eingeloggt)
    // oder Nachrichten-Feed (eingeloggt) angezeigt werden soll
    currentUser: state.currentUser,
    // Damit man jetzt die Errors als Props den AuthForms übergeben kann
    errors: state.errors
  };
}

// Erlaubt es auf die Props vom Router für die anderen Komponenten zugänglich zu machen
// So etwas wie das History-Objekt ist dann verfügbar
export default withRouter(
  connect(
    mapStateToProps,
    // Beide Funktionen sind nun in Props verfügbar
    { authUser, removeError }
  )(Main)
);
