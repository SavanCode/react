import React, { useContext } from 'react' 
import NoteItem from './Note'
import NotesContext from '../contexts/notes-context'

const NoteList = ()=> {
const {note} = useContext(NotesContext);
    return(
        <div>
        {note.map((element)=>{
                return(
                <div >
                    <NoteItem key={element.title} note={element}/>
                </div>
                )
            })}
        </div>
    )
}
export default NoteList