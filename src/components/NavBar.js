import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <Navbar bg="light" expand="md" className="mb-4">
      <Navbar.Brand>Rate Your Landlord</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink tag={Link} to="/">Home</NavLink>
          <NavLink tag={Link} to="/properties">Properties</NavLink>
          <NavLink tag={Link} to="/landlords">Landlords</NavLink>
          <NavLink tag={Link} to="/reviews">Reviews</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar