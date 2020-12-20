import React from 'react';
import ReactDOM from 'react-dom'; 
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Switch,Link} from "react-router-dom";
import { NavLink} from "react-router-dom";

const Header =()=>(
  <div>
    <h1>Portfolio</h1>
    <NavLink exact to="/">  Home </NavLink>
    <NavLink exact to="/Portfolio">  Portfolio </NavLink>
    <NavLink exact to="/Contact">  Contact </NavLink> 
  </div>);


const Home =()=>{ 
  return (
    <div>
        <h1>Welcome</h1>
        <p>This is my site. Take a look around!</p>
  </div>
  )}
  
  const Item =()=>{
      return (
          <div> 
             <Link to= "/Portfolio/1" >item 1</Link> 
             <Link to= "/Portfolio/2" >item 2</Link>   
          </div>
      )}
      
  const ItemDetail =(props)=>{
    return (
        <div>  
          <h1>A Thing I've Done</h1>
          <p>This page is for item with the id of {props.match.params.id}</p>
        </div>
    )}


  const Portfolio =()=>(
  <div>
    <h1>My Work</h1>
      <p>Checkout the stuff I have done</p>
      {/* <Link to= "/Portfolio/1" >item 1</Link> 
      <Link to= "/Portfolio/2" >item 2</Link> */}
      <Item />
  </div>
  );

  const Contact =()=>(
  <div>
      <h1>Contact</h1>
      <p>You can reach me at test@gmail.com</p>
  </div>
  );

    const NotFoundPage= ()=>(
      <div>
        404 - <Link to="/">Go Home</Link>
      </div>
    )
const Content = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Portfolio" component={Portfolio} />
      <Route exact path="/Portfolio/:id"  component={ItemDetail} />
      <Route path="/Contact" component={Contact} />
      <Route component={NotFoundPage} />
    </Switch>
  );

const routes = (
  <BrowserRouter>
    <Route path="/"  component={Header} />
      <Content /> 
  </BrowserRouter>
 )

ReactDOM.render(routes ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
