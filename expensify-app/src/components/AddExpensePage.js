import React from 'react';
import ExpenseForm from './ExpenseForm'
import {connect} from 'react-redux'
import {addExpense} from '../actions/expenses'


const AddExpensePage =(props)=> {
return (
    <div className="addExpense"> 
        <p>Add Expense</p>
        <ExpenseForm 
        onSubmit={(newExpense)=>{
            props.dispatch(addExpense(newExpense))
            props.history.push('/');//跳转回主页 不刷
            }} />
    </div>
    )
}



export default connect()(AddExpensePage);