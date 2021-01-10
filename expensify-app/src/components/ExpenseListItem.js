import React from 'react'
import { Link} from "react-router-dom";
import moment from 'moment'

const ExpenseListItem =({description,id,amount,createdAt})=>(
    <div className="itemList"> 
         <p><Link to={`/edit/${id}`}>
        {description}</Link></p>
        <p>$ {amount} </p> <p> { moment(createdAt).format('LLLL')} </p>
    </div>
);

export default  ExpenseListItem ; 