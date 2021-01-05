import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 


const BEEP =new Audio("https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3");

const convertTime=(timer)=> { //ms->m/s
  if(timer<0){ return '00:00';}
  var minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.ceil((timer % (1000 * 60)) / 1000);
  seconds = seconds < 10 ? '0' + seconds : seconds;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  if(timer===3600000 ){minutes=60} 
  return minutes + ':' + seconds;
}

const Title =(props)=>(
  <div> {props.title}</div>
)
 
const Break =(props)=>(
  <div>
    <p id="break-label">Break Length</p>
    <p id="break-length">{props.breakLength}</p>
    <button id="break-increment" onClick={()=>props.handleNum("BREAKUP")}>Up</button>
    <button id="break-decrement" onClick={()=>props.handleNum("BREAKDOWN")}>Down</button> 
  </div>
)

const Session =(props)=>(
  <div>
  <p id="session-label">session Length</p>
  <p id="session-length">{props.sessionLength}</p>
  <button id="session-increment" onClick={()=>props.handleNum("SESSIONUP")}>Up</button>
  <button id="session-decrement" onClick={()=>props.handleNum("SESSIONDOWN")}>Down</button> 
</div>
)

class Timer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      breakLength:this.props.breakLength,
      sessionLength:this.props.sessionLength,
      //leftTime:this.props.sessionLength*60*1000,
      leftTime:600,
      currentStatus:'Session',//s
      on: false,
    }
    this.timer=0; 
  } 

  switchMode=()=>{
    if(this.state.currentStatus==='Session'){
      this.setState({
        currentStatus:'Break',
        leftTime: this.state.breakLength*60*1000
      })
      this.switchBtn()
    }else if(this.state.currentStatus==='Break'){
      this.setState({
        currentStatus:'Session',
        leftTime: this.state.sessionLength*60*1000
      })
      this.switchBtn()
    }
  } 
  
  countDownTime=(num)=>{  
    var countDownDate = new Date().getTime() + num;
    var distance=num*60*1000;
    this.timer = setInterval(()=> {

      var now =  new Date().getTime()
      distance = countDownDate - now;
      //console.log(convertTime(distance))
      // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      // var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // console.log(minutes,seconds)
      this.setState({
          leftTime:distance
      })   
        if (distance < -700) { 
          this.pauseTimer();
          this.switchMode();
          BEEP.play();
          return
        }
      }, 1000) 
      
    } 
  
    pauseTimer=()=>{  
      clearInterval(this.timer);
      this.timer=0
    }
  
    switchBtn=()=>{ 
        if(!this.state.on){//true - on
          console.log("timer starting")
          this.countDownTime(this.state.leftTime);
          this.setState({on: !this.state.on})
        }else if(this.state.on){
          console.log("timer stopped")
          if(this.timer!==0){
            this.pauseTimer();
          }
          this.setState({on: !this.state.on})
        }
          
    }

    resetTimer=()=>{
      BEEP.pause()
      this.pauseTimer(); 
      this.props.reset(5,25)
      this.setState({
        leftTime:25*60*1000,
        currentStatus:'Session',//s
        on: false,
      })
     
    }

    // componentDidUpdate(prevProps,prevState){
    //   console.log("state",this.state)  
    //     console.log("prevProps",prevProps)  
    // } 
    
    componentWillReceiveProps(nextProps){
      console.log(convertTime(600))
      console.log("nextProps",nextProps)
      this.setState({
        breakLength:nextProps.breakLength,
        sessionLength:nextProps.sessionLength,
      })
      if(this.state.currentStatus==='Session'){
        this.setState({
          leftTime: nextProps.sessionLength*60*1000
        })
      }else if(this.state.currentStatus==='Break'){
        this.setState({
          leftTime: nextProps.breakLength*60*1000
        })
      } 
    }

    componentWillUnmount(){
      clearInterval(this.timer);
    }
  
  

    render(){ 
      return(
        <div>
          <div id="timer-label">{this.state.currentStatus}</div>
          <div id="time-left">{convertTime(this.state.leftTime)} </div>
          <button id="start_stop" onClick={()=>this.switchBtn()}>{this.state.on ? "stop": "start"}</button>
          <button id="reset"  onClick={()=>{this.resetTimer()}} >Reset</button>
          <audio id="beep" src={BEEP} preload="none"/>
        </div>
      )
    }
  } 




class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      breakLength:5,
      sessionLength:25,
    }
  }

  handleNum=(type)=>{ 
    // const ticking = this.state.on;
    // console.log(ticking)
    // if(ticking){
    //   return false
    // }else{ 
      switch(type){
        case "BREAKUP":
          return this.state.breakLength>=60 ? true :this.setState({
            breakLength:this.state.breakLength+1
          })
        case "SESSIONUP":
          return this.state.sessionLength>=60 ? true : this.setState({
            sessionLength:this.state.sessionLength+1
          })
        case "BREAKDOWN":
          return  this.state.breakLength<=1 ? true: this.setState({
            breakLength:this.state.breakLength-1
          })
        case "SESSIONDOWN":
          return this.state.sessionLength<=1 ? true:  this.setState({
            sessionLength:this.state.sessionLength-1
          })
          default:
            return true
      }
    //}
  }

  reset=(breakLength,sessionLength)=>{
    this.setState({
      breakLength:breakLength,
      sessionLength:sessionLength,
      on: false,
    })
  }



  // componentDidUpdate(prevProps,prevState){
  //   console.log("App current state",this.state)
  //   //console.log(prevProps,prevState)
  // } 

  render(){
    return(
      <div>
        <Title title="Clock"/>
        <Break breakLength={this.state.breakLength} handleNum={this.handleNum}/>
        <Session sessionLength={this.state.sessionLength} handleNum={this.handleNum} />
        <Timer breakLength={this.state.breakLength} sessionLength={this.state.sessionLength} reset={this.reset}/>
      </div>
    )
  }
}

ReactDOM.render(   <App /> , document.getElementById('root'));

 

 

// class Timer extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       time: 0,
//       isOn: false,
//       start: 0
//     }
//     this.startTimer = this.startTimer.bind(this)
//     this.stopTimer = this.stopTimer.bind(this)
//     this.resetTimer = this.resetTimer.bind(this)
//   }
//   startTimer() {
//     this.setState({
//       isOn: true,
//       time: this.state.time,
//       start: Date.now() - this.state.time
//     })
//     this.timer = setInterval(() => this.setState({
//       time: Date.now() - this.state.start
//     }), 1);
//   }
//   stopTimer() {
//     this.setState({isOn: false})
//     clearInterval(this.timer)
//   }
//   resetTimer() {
//     this.setState({time: 0, isOn: false})
//   }
//   render() {
//     let start = (this.state.time == 0) ?
//       <button onClick={this.startTimer}>start</button> :
//       null
//     let stop = (this.state.time == 0 || !this.state.isOn) ?
//       null :
//       <button onClick={this.stopTimer}>stop</button>
//     let resume = (this.state.time == 0 || this.state.isOn) ?
//       null :
//       <button onClick={this.startTimer}>resume</button>
//     let reset = (this.state.time == 0 || this.state.isOn) ?
//       null :
//       <button onClick={this.resetTimer}>reset</button>
//     return(
//       <div>
//         <h3>timer: {this.state.time}</h3>
//         {start}
//         {resume}
//         {stop}
//         {reset}
//       </div>
//     )
//   }
// }
// ReactDOM.render(   <Timer /> , document.getElementById('root'));