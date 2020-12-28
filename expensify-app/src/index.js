import React from 'react';
import ReactDOM from 'react-dom'; 
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Switch,Link} from "react-router-dom";
import { NavLink} from "react-router-dom";
import configureStore from './store/configStore';
import {addExpense,editExpense} from './actions/expenses'
import {setTextFilter,sortByAmount} from './actions/filters'
import getVisibleExpenses from './selector/expenses'

const Header =()=>(
  <div>
    <h1>Portfolio</h1>
    <NavLink exact to="/">  Home </NavLink>
    <NavLink exact to="/Portfolio">  Portfolio </NavLink>
    <NavLink exact to="/Contact">  Contact </NavLink> 
  </div>);


const Home =()=>{ 
  return (
    <div>
        <h1>Welcome</h1>
        <p>This is my site. Take a look around!</p>
  </div>
  )}
  
  const Item =()=>{
      return (
          <div> 
             <Link to= "/Portfolio/1" >item 1</Link> 
             <Link to= "/Portfolio/2" >item 2</Link>   
          </div>
      )}
      
  const ItemDetail =(props)=>{
    return (
        <div>  
          <h1>A Thing I've Done</h1>
          <p>This page is for item with the id of {props.match.params.id}</p>
        </div>
    )}


  const Portfolio =()=>(
  <div>
    <h1>My Work</h1>
      <p>Checkout the stuff I have done</p>
      {/* <Link to= "/Portfolio/1" >item 1</Link> 
      <Link to= "/Portfolio/2" >item 2</Link> */}
      <Item />
  </div>
  );

  const Contact =()=>(
  <div>
      <h1>Contact</h1>
      <p>You can reach me at test@gmail.com</p>
  </div>
  );

    const NotFoundPage= ()=>(
      <div>
        404 - <Link to="/">Go Home</Link>
      </div>
    )
const Content = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Portfolio" component={Portfolio} />
      <Route exact path="/Portfolio/:id"  component={ItemDetail} />
      <Route path="/Contact" component={Contact} />
      <Route component={NotFoundPage} />
    </Switch>
  );

const routes = (
  <BrowserRouter>
    <Route path="/"  component={Header} />
      <Content /> 
  </BrowserRouter>
 )

 ReactDOM.render(routes ,
  document.getElementById('root')
);
 

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


const store = configureStore();
//实时监控
const unsub=store.subscribe(()=>{ 
  const state=store.getState();
  const visibleExpenses =getVisibleExpenses(state.expenses,state.filters);
  console.log(visibleExpenses);
  console.log(store.getState()); 
})

//返回操作函数（对象包装函数） action generator
 const expenseOne = store.dispatch(addExpense({description:"cRent",amount:215610,createdAt:1000})) 
 const expenseTwo = store.dispatch(addExpense({description:"Coffee1",amount:1,createdAt:-1000})) 
 store.dispatch(addExpense({description:"Coffee2",amount:2,createdAt:2000})) 
 store.dispatch(addExpense({description:"Coffee3",amount:3,createdAt:3000}))  

 //store.dispatch(removeExpense({id:expenseOne.expense.id}))  
 store.dispatch(editExpense(expenseTwo.expense.id,{description:"c",amount:9}))  
 store.dispatch(setTextFilter("c")); 
 store.dispatch(sortByAmount()); 
 //store.dispatch(sortByDate()); 
 //store.dispatch(setStartDate(0)); 
 //store.dispatch(setEndDate(999)); 

// const demoState={
//   expenses:[{
//     id:'poijasdfhwer',
//     description:'January Rent',
//     note:'This was the final payment',
//     amount:54500,
//     createdAt:0
//   }],
//   filters:{
//     text:'rent',
//     sortBy:'amount',//date or amount
//     startDate:undefined,
//     endDate:undefined,
//   }
// }









// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

 