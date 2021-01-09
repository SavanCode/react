import React,{ useContext } from 'react';
import {Link} from "react-router-dom";  
import accountListContext from '../context/accountListContext'

const AccountDetailPage =(props)=>{ 
    const {state} = useContext(accountListContext); 
    const currentAccount=state.filter((ele)=>(ele.id === props.match.params.id))
    return (
        <div className="detailInfo">  
            <h1>Account Detail</h1>
            <p>ID ：  {currentAccount.id}</p>
            <p>UserName : {currentAccount.userName}</p>
            <p>Location ： {currentAccount.location}</p>
            <Link to="/view" ><button className="btn btn-outline-primary"> Back to Account List</button></Link>
        </div>
    )}

export default AccountDetailPage