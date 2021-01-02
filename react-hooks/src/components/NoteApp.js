import notesReducer from '../reducers/notes' 
import React, { useEffect, useReducer } from 'react'
import NoteList from './NoteList'
import AddNoteForm from './AddNoteForm'
import NotesContext from '../contexts/notes-context'

const NodeApp =()=>{
    //const [note,setNotes] =useState([]);
    const [note,Dispatch] = useReducer(notesReducer,[{title:'111',body:'222'}])
    
    //此处2个useEffect顺序绝对不能错，不然取不出
    useEffect(()=>{
      const note =JSON.parse(localStorage.getItem('notes')); 
      if(note){
        //setNotes(NotesData);
        Dispatch({type:'POPULATE',note});
      }
    },[])
    
    
    useEffect(()=>{
      localStorage.setItem('notes',JSON.stringify(note))
    },[note]) 

    return(
        // 原本只是div包裹 由于使用provider share 变量 所以传入值都可以不用了
      <NotesContext.Provider value={{note,Dispatch}}>
        <h1> Notes</h1> 
        <NoteList  />
        <p>Add notes</p>
        <AddNoteForm /> 
      </NotesContext.Provider>
    )
  }
  export default NodeApp