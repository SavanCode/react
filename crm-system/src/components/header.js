import React from 'react';
import { NavLink} from "react-router-dom";
const Header=()=>(
    <header >
      <div className="linkList">
      <span>Brand</span>
      <NavLink exact to="/" activeClassName="is-active" >  Home </NavLink>
      <NavLink exact to="/view" activeClassName="is-active">  Users </NavLink>
      <NavLink exact to="/create" activeClassName="is-active" >  Create </NavLink>
      </div>
    </header>
    
    );
    export default Header