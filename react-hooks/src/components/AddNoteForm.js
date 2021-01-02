import React, { useContext, useState } from 'react' 
import NotesContext from '../contexts/notes-context'

const AddNoteForm =()=>{
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const {Dispatch} = useContext(NotesContext);
       
    const addNote=(e)=>{
        e.preventDefault();
        //setNotes([...note,{title,body}]); 
        Dispatch({type:'ADD',title,body})
        setTitle('');
        setBody('')
      }

    return(
        <form onSubmit={addNote} >
        <input value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <textarea value={body} onChange={(e)=>setBody(e.target.value)} />
        <button>add note</button>
        </form>
        )
}
export default AddNoteForm