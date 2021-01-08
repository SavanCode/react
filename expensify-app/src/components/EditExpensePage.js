import React from 'react'; 
import ExpenseForm from './ExpenseForm'
import {editExpense,removeExpense} from '../actions/expenses'
import {connect} from 'react-redux'


const EditExpensePage =(props)=> { 
    return (
        <div> This  is edit expense, editing {props.match.params.id}  
        <ExpenseForm
            expense={props.expense} 
            onSubmit={(currentExpense)=>{
            props.dispatch(editExpense(props.expense.id,currentExpense))
            props.history.push('/');//跳转回主页 不刷
        }} />
        
        <button onClick={()=>{
            props.dispatch(removeExpense({ id:props.expense.id }))
            props.history.push('/');//跳转回主页 不刷
        }
        }> Remove </button>
        </div>
    ) 
}

const mapStateToProps = (state,props) => { 
        return {
            expense: state.expenses.find(expense => expense.id === props.match.params.id),
        }; 
  }

export default connect(mapStateToProps)(EditExpensePage);