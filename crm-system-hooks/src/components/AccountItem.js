import React , { useContext }from 'react';
import { Link} from "react-router-dom"; 
import ListGroup from 'react-bootstrap/ListGroup'
import accountListContext from '../context/accountListContext'

const AccountItem=(props)=>{  
  const {Dispatch} = useContext(accountListContext); 
  return(
    <>    
      <ListGroup.Item action variant="light">
      <span>{props.userName} , {props.location}</span>
      <span>
      {/* <Link to= {`/account/${props.id}`}><button type="button" className="btn btn-outline-primary">View</button></Link> */}
      <Link to= {`/account/${props.id}`}><input type="button" className="btn btn-outline-primary" value="View" /></Link>
      {/* <button type="button" className="btn btn-outline-secondary" onClick={()=>{ Dispatch({type:"REMOVE",id:props.id})}} >Delete</butston> */}
      <input type="button" className="btn btn-outline-secondary" onClick={()=>{ Dispatch({type:"REMOVE",id:props.id})}} value="Delete" />
      </span>
      </ListGroup.Item>
    </> 
  )} 

export default AccountItem 