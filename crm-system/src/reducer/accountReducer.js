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
export default accountReducer