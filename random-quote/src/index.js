import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import reportWebVitals from './reportWebVitals'; 

class RandomQuote extends React.Component{ 
  constructor(props){
    super(props)
    this.state = {
      quotes : [
        {
          quote: "Don't cry because it's over, smile because it happened.",
          author: "Dr. Seuss"
      },
      {
          quote: "You only live once, but if you do it right, once is enough.",
          author: "Mae West"
      },
      {
          quote: "Be yourself; everyone else is already taken.",
          author: "Oscar Wilde"
      },
      {
          quote:
          "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
          author: "Albert Einstein"
      },
      { quote: "So many books, so little time.", author: "Frank Zappa" },
      {
          quote: "A room without books is like a body without a soul.",
          author: "Marcus Tullius Cicero"
      },
      {
          quote:
          "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
          author: "J.K. Rowling"
      }],
      author: '',
      quote: ''       
  }
}

   pickQuote=()=>{
    const randomNum = Math.floor(Math.random() * this.state.quotes.length);
    const randomQuote=this.state.quotes[randomNum];
    if(randomQuote.author === this.state.author){
      randomNum = Math.floor(Math.random() * this.state.quotes.length);
    }

    this.setState({
      quote: randomQuote.quote,
      author:randomQuote.author
        }
    )
}
  

  render(){    
    
    return ( 
        <div id="quote-box">
          {!!this.state.author || <p>Please click the button to start</p>}
                <div id="text">{this.state.quote}</div>
                <div id="author">{this.state.author}</div>
                <button id="new-quote" onClick={this.pickQuote} >Click Here for new quote</button> 
                <a href="twitter.com/intent/tweet" target="_top" id="tweet-quote"> tweet the current quote.</a>
        </div> 
    )
  }
}

ReactDOM.render( <RandomQuote />,  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
