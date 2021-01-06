 import ReactDOM from 'react-dom';
import './index.css'; 
import Routes from './routes/routes'
import { createStore } from 'redux' 
import {v4 as uuidv4} from 'uuid' 
import { Provider } from 'react-redux'

const initState =  [{id:'sample',userName:"userName1",location:"AAA"},{id:"sample1",userName:"userName2",location:"BBB"}];

const accountReducer=(state = initState, action)=>{
  switch (action.type) {
    case 'ADD':
      return  [...state,action.account]
   case 'REMOVE':
      return state.filter((ele)=>(ele.id!==action.id))
    default:
      return state
  }
}
 
const store=createStore(accountReducer)

store.subscribe(() => console.log(store.getState()))

const addAccount=({userName,location}={})=>({ type: "ADD",account:{id:uuidv4(),userName:userName,location:location}})
const removeAccount=({id}={})=>({type:"REMOVE",id})






store.dispatch(addAccount({userName:"a1",location:"a1"}) )
store.dispatch(addAccount({userName:"a2",location:"a2"}) )

store.dispatch(removeAccount({id:"sample"}))

ReactDOM.render( <Provider store={store}><Routes /></Provider> , document.getElementById('root'));   