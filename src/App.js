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

class App extends Component {

  componentDidMount() {
    this.props.fetchLandlords()
    this.props.fetchProperties()
  }

    render() {
      return (
        <Router>
          <NavBar />
          <Route exact path='/landlords' component={LandlordsContainer} />

          <Route path='/properties' >
            <PropertiesContainer />
          </Route>
        </Router>
      )
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { fetchLandlords, fetchProperties })(App);
