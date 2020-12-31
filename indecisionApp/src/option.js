import React from 'react'

const Option= (props)=>{
    return(
        <div className="option">
            <li>  {props.optionText} 
                <button  onClick={() => props.remove(props.optionText)} >
                    remove
                </button>
                    </li>
        </div>
    )
}

export default Option