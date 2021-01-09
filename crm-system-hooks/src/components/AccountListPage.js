import React,{ useContext }from 'react';
import AccountItem from './AccountItem'; 
import ListGroup from 'react-bootstrap/ListGroup'
import accountListContext from '../context/accountListContext'

const AccountListPage=(props)=>{ 
  const {state} = useContext(accountListContext);
  return(
    <>
    {!state.length && <p className="errorMsg">please add an account to start</p>}
    <ListGroup>
     {state.map((ele)=>( <AccountItem  key={ele.id} {...ele} />))} 
      </ListGroup>
    </>
  )}


export default AccountListPage