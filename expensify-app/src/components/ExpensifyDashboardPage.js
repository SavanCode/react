import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from '../components/ExpenseListFilters'

const ExpensifyDashboardPage =()=>(
<div>
    <ExpenseListFilters />
    <ExpenseList />
 
</div>)

export default ExpensifyDashboardPage;