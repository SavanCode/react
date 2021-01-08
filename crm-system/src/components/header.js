import React from 'react';
import { NavLink} from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";  
      /* <div className="linkList">
      <span>Brand</span>
      <NavLink exact to="/" activeClassName="is-active" >  Home </NavLink>
      <NavLink exact to="/view" activeClassName="is-active">  Users </NavLink>
      <NavLink exact to="/create" activeClassName="is-active" >  Create </NavLink>
      </div> */
const Header=()=>(
     <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Brand</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            {/* <Nav.Link exact="true"   href="/">Home</Nav.Link>
            <Nav.Link exact="true"   href="/view">Users</Nav.Link>
            <Nav.Link exact="true"   href="/create">Create</Nav.Link>  */}
                  <NavLink className="nav-link" exact to="/" activeClassName="is-active" >  Home </NavLink>
                  <NavLink className="nav-link"  exact to="/view" activeClassName="is-active">  Users </NavLink>
                  <NavLink className="nav-link"  exact to="/create" activeClassName="is-active" >  Create </NavLink>
          </Nav> 
        </Navbar.Collapse>
      </Navbar>
    </>
    );
    export default Header