// Behinhaltet die Routing-Logik
import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "../components/Homepage";

const Main = props => {
  return (
    <div className="container">
      {/* Erlaubt mehrere Routes */}
      <Switch>
        {/* Triggert nur wenn an genau auf der Root-Route ist */}
        {/* Es wird eine Funktion gerendert, die die Hompage rendert und die Props für's Routing übergibt */}
        <Route exact path="/" render={props => <Homepage {...props} />} />
      </Switch>
    </div>
  );
};

// Damit der State aus dem Redux-Store als Props an die Komponente weiteregegeben wird
// https://www.youtube.com/watch?v=IIMUXbkKzW0
function mapStateToProp(state) {
  return {
    // Die Nurtzer-Infos sind nützlich um nachher zu entscheiden ob Homepage (nicht eingeloggt)
    // oder Nachrichten-Feed (eingeloggt) angezeigt werden soll
    currentUser: state.currentUser
  };
}

// Erlaubt es auf die Props vom Router für die anderen Komponenten zugänglich zu machen
// So etwas wie das History-Objekt (für Redirect) ist dann verfügbar
export default withRouter(
  connect(
    mapStateToProp,
    null
  )(Main)
);
