import { NavLink} from "react-router-dom";

const Header =()=>(
  <header>
    <h1>Expensify</h1>
    <NavLink exact to="/" activeClassName="is-active">  Home </NavLink>
    <NavLink exact to="/create" activeClassName="is-active">  AddExpensePage </NavLink>
    <NavLink exact to="/edit" activeClassName="is-active">  EditExpensePage </NavLink>
    <NavLink exact to="/help" activeClassName="is-active">  HelpPage </NavLink> 
  </header>);

  export default Header;