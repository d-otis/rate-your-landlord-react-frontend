import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import NavBar from './components/NavBar'
import { connect } from 'react-redux'
import { fetchLandlords } from './actions/landlordActions'
import { fetchProperties } from './actions/properties.actions'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landlords from './containers/Landlords'

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path='/landlords' component={Landlords} />
    </Router>

  )
}

}

const mapStateToProps = state => {
  return state
}

export default App;
