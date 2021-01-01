import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'; 
import reportWebVitals from './reportWebVitals';

const App =(props)=>{
  //完全改变全部的值 改变部分的话还是用类组件
  const [count,setConut] =useState(props.count);
  const [text,setText] =useState('');

//只有当某个state变化的时候，避免重复渲染
useEffect(()=>{
  console.log("I am running while state change");
  document.title=count;
},[count])


//只运行一次，尤其为了读取数据
useEffect(()=>{
  console.log("Only once"); 
},[])

  return(
    <div>
      <p>The current { text || "count"} is {count}</p>
      <button onClick={()=>setConut(count+1)}>+1</button>
      <button onClick={()=>setConut(count-1)}>-1</button>
      <button onClick={()=>setConut(props.count)}>reset</button>
      <input value={text} onChange={(e)=>setText(e.target.value)}/>
    </div>
  )
}
 
App.defaultProps={
  count:0
}
 



const NodeApp =()=>{
  const [note,setNotes] =useState([]);
  const [title,setTitle] = useState('');
  const [body,setBody] = useState('');
 
  const addNote=(e)=>{
    e.preventDefault();
    setNotes([...note,{title,body}]);
    setTitle('');
    setBody('')
  }
  
  const removeOne=(title)=>{ 
    setNotes(note.filter((note)=>{return note.title!==title}))
  }
  
  //此处2个useEffect顺序绝对不能错，不然取不出
  useEffect(()=>{
    const NotesData =JSON.parse(localStorage.getItem('notes')); 
    if(NotesData){
      setNotes(NotesData);
    }
  },[])
  
  
  useEffect(()=>{
    localStorage.setItem('notes',JSON.stringify(note))
  },[note])



  console.log({note},{title},{body});
  return(
    <div>
      <h1> Notes</h1> 
       {note.map((element)=>{
          return(
            <div >
              <NoteItem key={element.title} note={element} removeOne={removeOne}/>
            </div>
          )
        })}
      <p>Add notes</p>
      <form onSubmit={addNote}>
      <input value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <textarea value={body} onChange={(e)=>setBody(e.target.value)} />
      <button>add note</button>
      </form>
     
    </div>
  )
}

const NoteItem =({note,removeOne})=>{
  useEffect(()=>{
    console.log("starting");
    return ()=>{
      console.log("cleaning up")
    }
  })
  return(
    <div> 
      {note.title}
      {note.body}
      <button onClick={()=>removeOne(note.title)}> Remove this</button>
    </div>
  )
}



ReactDOM.render(  <NodeApp /> , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
