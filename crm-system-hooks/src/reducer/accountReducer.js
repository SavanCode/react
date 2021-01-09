const accountReducer=(state, action)=>{
    switch (action.type) {
      case 'POPULATE':
        return action.accountList
      case 'ADD':
        return  [...state,action.account]
     case 'REMOVE':
        return state.filter((ele)=>(ele.id!==action.id))
      default:
        return state
    }
  }
export default accountReducer