import React, { useContext,useEffect, useState } from 'react'
import NotesContext from '../contexts/notes-context'

const Mousemove =()=>{
        const [position,setPosition] =useState({x:0,y:0})

        useEffect(()=>{
            console.log("starting");
              const mouseEvent =(e)=>{
                  setPosition({
                      x:e.pageX,
                      y:e.pageY
                  })
              }
              document.addEventListener('mousemove',mouseEvent)
      
            return ()=>{
              console.log("cleaning up");
              document.removeEventListener('mousemove',mouseEvent)
            }
          },[])
          return position
}


const NoteItem =({note})=>{

    const {Dispatch} = useContext(NotesContext);
    const position =Mousemove();

    const removeOne=(title)=>{ 
        //setNotes(note.filter((note)=>{return note.title!==title}))
        Dispatch({type:'REMOVE',title});
      }

    return(
      <div> 
        {note.title}
        {note.body}
        <p>{position.x},{position.y}</p>
        <button onClick={()=>removeOne(note.title)}> Remove this</button>
      </div>
    )
  }
  export default NoteItem