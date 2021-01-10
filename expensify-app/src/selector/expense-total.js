const getExpensesTotal = (expenses) => {
    const amounts = expenses.map((expense) => expense.amount);
    const total = amounts.reduce((sum, acc) => sum + acc, 0);
    return total;
  };
  
  export default getExpensesTotal;