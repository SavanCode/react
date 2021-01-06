import React from 'react';
import AccountItem from './AccountItem'; 
import {connect} from 'react-redux'

const AccountListPage=(props)=>{
  console.log(props.accountList)
  return(
    <div>
       <p>{props.accountList.map((ele)=>( <AccountItem  key={ele.id} {...ele} />))}</p>
    </div>
  )}

  const mapStateToProps = (state /*, ownProps*/) => {
    return  {
      accountList:state
    }
  } 

export default connect(mapStateToProps)(AccountListPage)