 
const notesReducer=(state,action)=>{
    switch(action.type){
      case 'POPULATE':
        return action.note
      case 'ADD':
        return [...state,{title:action.title,body:action.body}]
      case 'REMOVE':
        return state.filter((element)=>element.title !== action.title)
      default:
        return state
      }
      
    }

    export default notesReducer;