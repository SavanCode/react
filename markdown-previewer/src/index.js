import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import reportWebVitals from './reportWebVitals';
import marked from 'marked' 

const defaultContent = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`
const renderer = new marked.Renderer()
renderer.link = (href, title, text) => {
  return `<a href=${href} target="_blank">${text}</a>`
}

const Window =(props)=>(
  <div id="windowTop">{props.title}</div>
)

const Previewer=(props)=>{
    return(
      <div id="previewDiv" >
        <Window title='Previewer'/>
        <div id="preview" dangerouslySetInnerHTML={{
          __html: marked(props.content, {
            breaks: true,
            renderer: renderer,
          })
          }
       } ></div>
      </div>
    )
}
const Editor=(props)=>{
  return(
    <div id="editorDiv">
      <Window title='Editor'/> 
      <textarea id="editor" value={props.content} onChange={props.changeContent}  ></textarea>
    </div>
  )
}
 
class MarkdownPreviewer extends React.Component{
  constructor(props){
    super(props);
    this.state={ content:defaultContent }
  } 

  changeContent=(e)=>{ 
    this.setState({
      content:e.target.value
    })
  }

  render() {
    return (
    <>
      <Editor content={this.state.content} changeContent={this.changeContent}/>
      <Previewer content={this.state.content} /> 
    </>
    )
  }
}


ReactDOM.render(  <MarkdownPreviewer /> ,document.getElementById('root') );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
