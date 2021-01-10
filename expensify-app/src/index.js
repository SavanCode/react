import React from 'react'
import ReactDOM from 'react-dom';  
import AppRouter from './routes/AppRouter'
import store from './store/configStore';
// import {addExpense,editExpense} from './actions/expenses'
// import getVisibleExpenses from './selector/expenses' 
import { Provider } from 'react-redux'
import './style/style.scss';  
 
//const state=store.getState();
// const visibleExpenses =getVisibleExpenses(state.expenses,state.filters);
// console.log(visibleExpenses);
// console.log(store.getState());  

const jsx = (
  <Provider store={store}>
  <AppRouter />
  </Provider>
)


ReactDOM.render(jsx ,document.getElementById('root'));

 