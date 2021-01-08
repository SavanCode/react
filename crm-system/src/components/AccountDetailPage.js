import React from 'react';
import { Link} from "react-router-dom"; 
import {connect} from 'react-redux'
const AccountDetailPage =(props)=>{
    console.log(props.item)//{[]}
    return (
        <div className="detailInfo">  
            <h1>Account Detail</h1>
            <p> the id of  {props.item[0].id}</p>
            <p>UserName : {props.item[0].userName}</p>
            <p>Location ： {props.item[0].location}</p>
            <button className="btn btn-outline-primary"> <Link to="/view" >Back to Account List</Link></button>
        </div>
    )}

    const mapStateToProps = (state , ownProps) => {
        return  {
          item:state.filter((ele)=>(ele.id === ownProps.match.params.id))
        }
      }
    



export default connect(mapStateToProps)(AccountDetailPage)