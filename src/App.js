import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import NavBar from './components/NavBar'
import { connect } from 'react-redux'
import { fetchLandlords } from './actions/landlords.actions'
import { fetchProperties } from './actions/properties.actions'
import { fetchReviews } from './actions/reviews.actions'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandlordsContainer from './containers/LandlordsContainer'
import PropertiesContainer from './containers/PropertiesContainer'

class App extends Component {

  componentDidMount() {
      this.fetchAll()
    }

    fetchAll = () => {
      this.props.fetchLandlords()
      this.props.fetchProperties()
      this.props.fetchReviews()
    }

render() {
  const { landlords } = this.props
  // debugger
  return (
    <Router>
      <NavBar />
      <Route exact path='/landlords' >
        <LandlordsContainer landlords={landlords} />
      </Route>
      <Route exact path='/properties' >
        <PropertiesContainer properties={properties} />
      </Route>
    </Router>

  )
}

}

const mapStateToProps = state => state

export default connect(mapStateToProps, { fetchLandlords, fetchProperties, fetchReviews })(App);
