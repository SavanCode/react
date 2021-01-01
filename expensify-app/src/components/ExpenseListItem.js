import React from 'react'
import { Link} from "react-router-dom";
import moment from 'moment'

const ExpenseListItem =({description,id,amount,createdAt})=>(
    <div className="itemList"> 
        <Link to={`/edit/${id}`}>
        <p> {description}</p></Link>
        <p>{amount} </p> <p> { moment(createdAt).format('LLLL')} </p>
    </div>
);

export default  ExpenseListItem ;

//export default ExpenseListItem