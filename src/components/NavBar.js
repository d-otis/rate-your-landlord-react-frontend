import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NavBar extends Component {

  render() {
    return (
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
    )
  }
}

export default NavBar;