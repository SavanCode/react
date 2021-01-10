import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from '../selector/expenses'

const selectExpenses=getVisibleExpenses;

const ExpenseList =(props)=>(
    <div className="expenseList"> 
        <p className="expenseListTitle">Expenses List</p>
        <div className="itemListHeader"><p>ITEM</p><p>AMOUTNT</p> <p>TIME</p></div>
        {props.expenses.map((element,index)=>(
          <ExpenseListItem key={index} {...element} />  
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