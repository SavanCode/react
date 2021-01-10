//default state & reducer
const expensesReducerDefaultState=[{id:"123456",description:"water bill",amount:800,createdAt:100},{id:"654321",description:"gas bill",amount:8020,createdAt:33}];
const expensesReducer=(state=expensesReducerDefaultState,action)=> {
  switch(action.type){
    case "ADD_EXPENSE": 
    //return  state.concat(action.expense);//此处不影响原先数组 只是返回新数组 
    return [...state,action.expense];
    case "REMOVE_EXPENSE": 
    return state.filter(function (elem) {
      return (elem.id !== action.id);
    });
    case "EDIT_EXPENSE": 
    //return  state.concat(action.expense);//此处不影响原先数组 只是返回新数组 
    return state.map((expense)=>{
      if(expense.id===action.id){
        return {
          ...expense,
          ...action.updates,
        }
      }else{
        return expense
      }
    });
    default: return state
  }
}
export default expensesReducer