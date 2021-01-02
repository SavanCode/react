import React from 'react'
import ReactDOM from 'react-dom'; 
import reportWebVitals from './reportWebVitals';
import NodeApp from './components/NoteApp'

// const App =(props)=>{
//   //完全改变全部的值 改变部分的话还是用类组件
//   const [count,setConut] =useState(props.count);
//   const [text,setText] =useState('');

// //只有当某个state变化的时候，避免重复渲染
// useEffect(()=>{
//   console.log("I am running while state change");
//   document.title=count;
// },[count])


// //只运行一次，尤其为了读取数据
// useEffect(()=>{
//   console.log("Only once"); 
// },[])

//   return(
//     <div>
//       <p>The current { text || "count"} is {count}</p>
//       <button onClick={()=>setConut(count+1)}>+1</button>
//       <button onClick={()=>setConut(count-1)}>-1</button>
//       <button onClick={()=>setConut(props.count)}>reset</button>
//       <input value={text} onChange={(e)=>setText(e.target.value)}/>
//     </div>
//   )
// }
 
// App.defaultProps={
//   count:0
// }
 
 




ReactDOM.render(  <NodeApp /> , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
