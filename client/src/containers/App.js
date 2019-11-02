import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "../store";
// Um von Seite zu Seite zu navigieren
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import { setAuhorizationToken, setCurrentUser } from "../store/actions/auth";
import currentUser from "../store/reducers/currentUser";
import jwtDecode from "jwt-deode";

const store = configureStore();

// Wenn die Seite neu aufgerufen wird, und der Token noch im localStorage ist
// Wird man wieder eingeloggt, und der Token wird mit jedem Request mitgesendet.
if (localStorage.jwtToken) {
  setAuhorizationToken(localStorage.jwtToken);
  // Um jemanden davon abzuhalten den Token im LocalStorage zu verfälschen
  try {
    // jwtDecode gibt den Payload (also die User-Daten) zurück
    // Diese werden anhand des Tokens im localStorage dekodiert.
    store.dispatch(currentUser(jwtDecode(localStorage.jwtToken)))
  } 
  // Wenn der Token invalide ist, wird der User ausgeloggt.
  catch (e) {
    store.dispatch(setCurrentUser({}));
  }
}

const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Main />
    </Router>
  </Provider>
);

export default App;
