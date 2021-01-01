import React from 'react'
import ReactDOM from 'react-dom'; 
import reportWebVitals from './reportWebVitals';
import AppRouter from './routes/AppRouter'

import store from './store/configStore';
import {addExpense,editExpense} from './actions/expenses'
import {setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate} from './actions/filters'
import getVisibleExpenses from './selector/expenses'
import filtersReducer from './reducers/filters'
import expensesReducer from './reducers/expenses'
import { Provider } from 'react-redux'
import './style/style.scss';
// ReactDOM.render(AppRouter ,document.getElementById('root'));
 

/*
 const initState = {
  count :0 ,
  list:['任务一',"任务二"]
};


const countReducer=(state=initState,action)=>{
  switch(action.type){
  case "INCREMENT": 
    return { count:state.count+action.incrementBy };
  
  case "DECREMENT":  
    return { count:state.count-action.decrementBy };
  
  case "RESET": return { count:0 };

  case "SET": return { count:action.setCount };
  
  default: return state
  }
}


 //仓库放所有action选择 以及state 以及返回新的对象
const store = createStore(countReducer) 
//实时监控
const unsub=store.subscribe(()=>{ console.log(store.getState()); })

//返回操作函数（对象包装函数） action generator
const increment =(payload={})=>{
  return {
  type: "INCREMENT",
  incrementBy:typeof payload.incrementBy ==='number'? payload.incrementBy :1}
}
//这里利用解构 简化写法
const decrement =({decrementBy=1}={})=>{
 return{
  type: "DECREMENT",
  decrementBy} 
}


const reset =()=>{
  return {
    type: "RESET"
  }
}


const set =({setCount}={})=>{
  return {
    type: "SET",
    setCount
  }
}

//执行
store.dispatch(increment({incrementBy:6}))
store.dispatch(increment({
  type: "INCREMENT" 
}))
//直接取消掉subscribe


store.dispatch(decrement({decrementBy:5})) 

store.dispatch(reset())

store.dispatch(decrement({decrementBy:5})) 

store.dispatch(set({setCount:-99})) 

unsub();

//后面执行但是不会跟踪
store.dispatch({
  type: "DECREMENT",
  decrementBy:3
}) 
console.log(store.getState())
 
*/


//const store = configureStore();
 


//返回操作函数（对象包装函数） action generator
store.dispatch(addExpense({description:"water bill",createdAt:100})) 
store.dispatch(addExpense({description:"gas bill",amount:8020,createdAt:33})) 

//store.dispatch(setTextFilter("BILL"));  

const state=store.getState();
const visibleExpenses =getVisibleExpenses(state.expenses,state.filters);
console.log(visibleExpenses);
console.log(store.getState());  

const jsx = (
  <Provider store={store}>
  <AppRouter />
  </Provider>
)


ReactDOM.render(jsx ,document.getElementById('root'));







// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

 