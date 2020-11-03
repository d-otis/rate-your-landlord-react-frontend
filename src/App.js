import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import NavBar from './components/NavBar'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandlordsContainer from './containers/LandlordsContainer'
import PropertiesContainer from './containers/PropertiesContainer'

class App extends Component {

    render() {
      const { landlords } = this.props
      // debugger
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

export default connect(mapStateToProps)(App);
