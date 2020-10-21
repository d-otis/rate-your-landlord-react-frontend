import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/landlords">Landlords</Link>
          </li>
          <li>
            <Link to="/properties">Properties</Link>
          </li>
        </ul>
      </div>


      <Switch>
        <Route exact path="/">
          Home!
        </Route>
        <Route exact path="/landlords">
          Landlords
        </Route>
        <Route exact path="/properties">
          Properties
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
