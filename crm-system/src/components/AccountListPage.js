import React from 'react';
import AccountItem from './AccountItem'; 
import {connect} from 'react-redux'
import ListGroup from 'react-bootstrap/ListGroup'

const AccountListPage=(props)=>{ 
  //console.log("accountList",props)
  return(
    <>
    {!props.state.length && <p className="errorMsg">please add an account to start</p>}
    <ListGroup>
      {props.state.map((ele)=>( <AccountItem  key={ele.id} {...ele} />))}
      </ListGroup>
    </>
  )}

  const mapStateToProps = (state /*, ownProps*/) => {
    return  {
      state
    }
  } 

export default connect(mapStateToProps)(AccountListPage)