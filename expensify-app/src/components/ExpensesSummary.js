import React from "react";
import { connect } from "react-redux"; 
import numeral from "numeral";
import selectExpenses from "../selector/expenses";
import getExpensesTotal from "../selector/expense-total";

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  const expenseWord = expensesCount === 1 ? "expense" : "expenses";
  const formattedExpensesTotal = numeral(expensesTotal).format("$0,0.00");
  return ( 
      <div className="expenseTotal_div">
        <h1 className="expenseTotal_content">
          Viewing {" "} <span> {expensesCount}</span> {" "}
          {expenseWord} totalling <span>{formattedExpensesTotal}</span>
        </h1> 
      </div> 
  );
};

const mapStateToProps = (state) => {
  const visableExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expensesCount: visableExpenses.length,
    expensesTotal: getExpensesTotal(visableExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);