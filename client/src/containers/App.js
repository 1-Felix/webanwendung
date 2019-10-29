import React from 'react';
import {Provider} from "react-redux";
import {configureStore} from "../store"
// Um von Seite zu Seite zu navigieren
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./navbar"


const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="onboarding">
        <Navbar />
      </div>
    </Router>
  </Provider>
)

export default App;
