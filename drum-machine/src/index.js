import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import reportWebVitals from './reportWebVitals';


const audios = {
  Q: {
    keypad: "Q",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    displayText: "Heater 1"
  },
  W: {
    keypad: "W",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    displayText: "Heater 2"
  },
  E: {
    keypad: "E",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    displayText: "Heater 3"
  },
  A: {
    keypad: "A",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    displayText: "Heater 4"
  },
  S: {
    keypad: "S",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    displayText: "Clap"
  },
  D: {
    keypad: "D",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    displayText: "Open HH"
  },
  Z: {
    keypad: "Z",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    displayText: "Kick n' Hat"
  },
  X: {
    keypad: "X",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    displayText: "Kick"
  },
  C: {
    keypad: "C",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    displayText: "Closed HH"
  }
};

const Pad = (props)=>{ 
  return(
  //<div>{props.displayText}</div>  
    <div id="pad"> 
      <button className="drum-pad" id={props.obj.displayText} onClick={()=>{props.handleDisplay(props.obj.displayText);props.handlePlay(props.obj.keypad)}} >
        <audio id={props.obj.keypad} className="clip" src={props.obj.audio} />{props.obj.keypad}
      </button>
    </div>  
  )
}

const Display=(props)=>{
  return(
    <div id="display">
       <p>{props.active}</p>
    </div>
  )
}

class Drum extends React.Component{
  constructor(){
    super();
    this.state={
      padName : ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'],
      active : ""
    }
  }
  handleDisplay=(text)=>{
    this.setState({
      active:text
    })
  }


  //id is the audio keypad
  handlePlay = (id) => {
    // audio.currentTime = 0;
    // audio.volume = this.state.volume
    document.getElementById(id).play();
  };
 

  componentDidMount() {
    document.addEventListener("keydown", 
    (e)=>{
      if(audios[e.key.toUpperCase()]){
       const audio=audios[e.key.toUpperCase()];
      this.handlePlay( audio.keypad);
      this.handleDisplay(audio.displayText)}
    }
    )
  }

  componentWillUnmount(){
    document.removeEventListener("keydown")
  }

  render(){
   // Object.values(audios).map(ele=>console.log(ele))
      return(
    <div id="drum-machine">
      <div id="keyBoard">
        {Object.values(audios).map((element)=><Pad key={element.keypad} obj={element} handleDisplay={this.handleDisplay} handlePlay={this.handlePlay}/>)}
      </div>
        <Display active={this.state.active}/>
    </div>
   )
  } 
}


ReactDOM.render( 
    <Drum /> ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
