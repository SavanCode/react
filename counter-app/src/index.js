import React from 'react'
import ReactDOM from 'react-dom'
import "./index.css";

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.addone=this.addone.bind(this);
    this.minuseone=this.minuseone.bind(this);
    this.reset=this.reset.bind(this);
    this.state={ count:100 }
  }

  addone(){
    this.setState((prevState)=>{
       return {
         count: prevState.count+1}
    });
  }
  minuseone(){
    this.setState((prevState)=>{
      return {
        count: prevState.count-1}
   });
  }
  reset(){
    this.setState((prevState)=>{
      return {
        count: 0}
   });
  }
  //变化的时候存
  componentDidUpdate(prevProps,prevState){
    if(prevState.count!==this.state.count){
      const json= JSON.stringify(this.state.count);
      localStorage.setItem('count',json);
    }
  }
  //刷新的时候取
  componentDidMount(){
    const json = localStorage.getItem('count');
    const count =JSON.parse(json,10)
    if (!isNaN(count)) {
    this.setState(()=>({
      count:count
    }))
    }
  } 


  render() {
    return (
    <div className="main">
    <h1>Count: {this.state.count} </h1>
    <button onClick={this.addone }> +1</button>
    <button onClick={this.minuseone}> -1</button>
    <button onClick={this.reset}> reset</button>
    </div>
    )
  }
}

ReactDOM.render( <Counter />, document.getElementById('root'));