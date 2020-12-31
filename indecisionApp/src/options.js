import React from 'react' 
import Option from './option.js'

const Options = (props)=>{
    return (
        <div>
            <div className="optionListTop">
            <p>Option Lists</p>
            <button className="removeAllBtn" onClick={props.removeAll}>Remove all</button>
            </div>
            {props.options.length === 0 && <p>Add an option to started!</p>}
            <ul className="optionList">
            {/* {props.options.map((i) => <li key={i}>{i} <button onClick={props.remove}> remove </button></li>)}  */}
            {props.options.map((e,i) => <Option key={e} optionText={e} remove={props.remove}/>)}

            </ul>
            
        </div>
    )
}
export default Options