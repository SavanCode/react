import { NavLink} from "react-router-dom";

const Header =()=>(
  <header className="header">
    <h1 className="headerTitle">ExpensifyApp React</h1>
    <div className="linkList">
    <NavLink exact to="/" activeClassName="is-active" >  Home </NavLink>
    <NavLink exact to="/create" activeClassName="is-active" >  AddExpensePage </NavLink>
    <NavLink exact to="/edit" activeClassName="is-active">  EditExpensePage </NavLink>
    <NavLink exact to="/help" activeClassName="is-active" >  HelpPage </NavLink> 
    </div>
  </header>);

  export default Header;