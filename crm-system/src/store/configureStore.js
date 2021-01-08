import { createStore } from 'redux' 
import accountReducer from '../reducer/accountReducer'

const store=createStore(accountReducer)

export default store