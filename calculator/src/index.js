import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import reportWebVitals from './reportWebVitals';

const OPERATORPAD = {
  clear: "AC",
  divide: "/",
  multiply: "*",
  subtract: "-",
  add: "+",
  decimal: ".",
  equals: "=",
};

const NUMBERPAD = {
  zero: "0",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9"
};

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state={
      result:0,
      formula:'',
      currentNum:0
    }
  }

  //only add operator after number
  addOperator=(operator)=>{ 
    if(typeof this.state.formula === 'number'){
      this.setState({ 
        formula: this.state.formula+operator,
        result: this.state.formula,
        currentNum:0
       })
       return 
    }
    const lastChar= this.state.formula.slice(-1);
    switch(lastChar){
      case "/":
      case "*":
      case "+":
        return true
      // case".":
      // console.log(typeof this.state.currentNum)
      //   return true
      default: 
         this.setState({ 
           formula: this.state.formula+operator,
           result: this.state.formula,
           currentNum:0
          })
    }
   
  }

  addDecNeg=(operator)=>{
    if(operator==='.'){
      if( typeof this.state.currentNum ==='number' || this.state.currentNum.includes('.')){
        return 
      }
      this.setState({ 
        formula: this.state.formula+'.',
        result: this.state.formula,
        currentNum:this.state.currentNum+'.'
      })
    }
    if(operator==='-'){ 
      this.setState({ 
        formula: this.state.formula+operator,
        result: this.state.formula,
        currentNum:0
      })
    }
  }
// click / * - + . = AC
  operatorClick=(e)=>{
    const operater =OPERATORPAD[e.target.id];
    //console.log("input",OPERATORPAD[e.target.id])
    switch(operater){
      case "AC":
        return this.setState({  result:0, formula:'',currentNum:0})
      case "=":
        return this.calculate(this.state.formula)
      case "/":
      case "*": 
      case "+":
        return this.addOperator(operater) 
      case".":
      case "-":
        return this.addDecNeg(operater) 
      default:
        return true
        
    }
  }

  checkInputNum=(input)=>{
    if(input === '0' && this.state.formula===''){
          return false
        }else{return true}
  }

  //click number 
  numberClick=(e)=>{
    
    const number=NUMBERPAD[e.target.id];
    console.log("input",number);
    if(!this.checkInputNum(number)){
        return
    } 
    this.setState({
      formula: this.state.formula+number,
      result: this.state.formula +number,
      currentNum: this.state.currentNum +number
    })
  }

  calculate=(formula)=>{
        if(this.state.formula===''){
            return
    }
    this.setState({
      result: eval(formula),
       formula: eval(formula),
       currentNum: eval(formula)
    })
  }
  
    render(){
    
    return(
      <div id="main">
        <div id="pad">
          <div id="operator">
          {Object.keys(OPERATORPAD).map((key,index)=>(<button id={key} key={key} onClick={this.operatorClick}>{OPERATORPAD[key]}</button>))}
          </div>


          <div id="number">
          {Object.keys(NUMBERPAD).map((key,index)=>(<button id={key} key={key} onClick={this.numberClick}>{NUMBERPAD[key]}</button>))}
            </div> 

        </div>
        <div id="content">
          <p id="display">  {this.state.result} </p> 
          <p >formula:  {this.state.formula} </p> 
          {/* <p >curent:  {this.state.currentNum} </p>  */}
        </div>     
      </div>
    )
  }
}


ReactDOM.render(<Calculator />,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
