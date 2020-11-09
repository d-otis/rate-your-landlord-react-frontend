import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import NavBar from './components/NavBar'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandlordsContainer from './containers/LandlordsContainer'
import PropertiesContainer from './containers/PropertiesContainer'
import { fetchLandlords } from './actions/landlords.actions'
import { fetchProperties } from './actions/properties.actions'
import { fetchReviews } from './actions/reviews.actions'

class App extends Component {

  componentDidMount() {
    this.props.fetchLandlords()
    this.props.fetchProperties()
    this.props.fetchReviews()
  }

  render() {
    return (
      <Router>
          <NavBar />
          <Route path='/landlords' render={routerProps => <LandlordsContainer {...routerProps} />} />
          <Route path='/properties' render={routerProps => <PropertiesContainer {...routerProps} />} />
      </Router>
    )
  }
}

const mapStateToProps = state => state

export default connect(null, { fetchLandlords, fetchProperties, fetchReviews })(App);
