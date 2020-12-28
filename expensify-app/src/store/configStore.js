import {createStore,combineReducers} from "redux";
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

//仓库放所有action选择 以及state 以及返回新的对象
export default ()=>{
    const store = createStore(
        combineReducers({
            expenses:expensesReducer,
            filters:filtersReducer
        })
    ); 
    return store;
}
