import React from 'react';
import {Provider} from "react-redux";
import {configureStore} from "../store"
// Um von Seite zu Seite zu navigieren
import {BrowserRouter as Router} from "react-router-dom";


const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div>Hallo Welt?</div>
    </Router>
  </Provider>
)

export default App;
