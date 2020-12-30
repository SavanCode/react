import React from 'react'; 
import ExpenseForm from './ExpenseForm'
import {editExpense} from '../actions/expenses'
import {connect} from 'react-redux'


const EditExpensePage =(props)=> {
    console.log(props)
    return (
        <div> This  is edit expense, editing {props.match.params.id}  
        <ExpenseForm
            expense={props.expense} 
            onSubmit={(currentExpense)=>{
            props.dispatch(editExpense(props.match.params.id,currentExpense))
            props.history.push('/');//跳转回主页 不刷
        }} />
        </div>
    ) 
}

const mapStateToProps = (state,props) => { 
        return {
            expense: state.expenses.find(expense => expense.id === props.match.params.id),
        }; 
  }

export default connect(mapStateToProps)(EditExpensePage);