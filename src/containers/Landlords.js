import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLandlords } from '../actions/landlordActions'
import Landlord from '../components/Landlord'

class Landlords extends Component {

  componentDidMount() {
    this.props.fetchLandlords()
  }


  render() {

    const landlords = this.props.landlords
    // debugger

    return (
      <div>
        <h1>Landlords Index</h1>
        {landlords.map(landlord => <Landlord key={landlord.id} {...landlord} />)}
      </div>
      
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchLandlords: () => dispatch(fetchLandlords())
  }
}

const mapStateToProps = state => {
  return {
    landlords: state.landlords
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landlords)