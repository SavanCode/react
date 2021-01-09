import React, {useEffect, useReducer} from 'react' 
import ReactDOM from 'react-dom';
import './index.css'; 
import Routes from './routes/routes' 
import accountReducer from './reducer/accountReducer' 
import accountListContext from './context/accountListContext' 
 
function App(){
  const [state,Dispatch] = useReducer(accountReducer,[{id:'sample',userName:"userName1",location:"AAA"},{id:"sample1",userName:"userName2",location:"BBB"}])
  
  useEffect(()=>{
    const accountList =JSON.parse(localStorage.getItem('accountList')); 
    if(accountList){ 
      Dispatch({type:'POPULATE',accountList:accountList})
    }},[])
  
  useEffect(()=>{
    localStorage.setItem('accountList',JSON.stringify(state))
  },[state]) 

  return(
    <accountListContext.Provider value={{state,Dispatch}}>
      <Routes /> 
    </accountListContext.Provider>
  )}; 

ReactDOM.render( <App />, document.getElementById('root'));   
 