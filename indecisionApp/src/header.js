import React from 'react' 
import './index.css'
//header
const Header=(props)=>(
     
        <div>
                <h2 className="title1">{props.title}</h2>
                { props.subtitle && <p className="title2">{props.subtitle}</p>}
        </div> 
)

Header.defaultProps={
        title:'Indecision App'
}

export default Header