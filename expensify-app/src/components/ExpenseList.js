import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from '../selector/expenses'

const selectExpenses=getVisibleExpenses;

const ExpenseList =(props)=>(
    <div>
        <h1>Expenses</h1>
        {props.expenses.map((element)=>(
          <ExpenseListItem key={element.id} {...element} />  
        ))} 
    </div>
);

const mapStateToProps = (state /*, ownProps*/) => {
    return {
      expenses: selectExpenses(state.expenses,state.filters),
      filters:state.filters
    }
  }

const ConnectExpenseList= connect(mapStateToProps)(ExpenseList);

export default ConnectExpenseList