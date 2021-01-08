import React from 'react';
import { Link} from "react-router-dom"; 
import {removeAccount} from '../action/accountAction'
import {connect} from 'react-redux'
import ListGroup from 'react-bootstrap/ListGroup'

const AccountItem=(props)=>{  
  console.log("accountItem",props)
  return(
    <>    
      <ListGroup.Item action variant="light">
      <span>{props.userName} , {props.location}</span>
      <span>
      <button type="button" className="btn btn-outline-primary"><Link to= {`/account/${props.id}`}>View</Link></button> 
      <button type="button" className="btn btn-outline-secondary" onClick={()=>{ props.dispatch(removeAccount({id:props.id})) }} >Delete</button>
      {/* <button type="button" className="btn btn-outline-secondary" onClick={props.onRemoveAccount({id:props.id})} >Delete</button> */}
      </span>
      </ListGroup.Item>
    </> 
  )}

  const mapStateToProps = (state) => {
    return  {
      state
    }
  } 
export default connect(mapStateToProps)(AccountItem)

/// 
// const mapDispatchToProps = ( state, dispatch) => {
//     return { 
//     onRemoveAccount:({id})=> dispatch(removeAccount({id}) )    
//    };
//  }

// export default connect(mapDispatchToProps)(AccountItem)