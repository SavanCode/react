import React from 'react';
import { Link} from "react-router-dom"; 

const AccountItem=(props)=>{ 
  return(
    <div>  
    <span>{props.userName}</span>
    <button><Link to= {`/account/${props.id}`}>View</Link></button> 
    <button>remove</button><br/> 
    </div> 
  )}
  export default AccountItem