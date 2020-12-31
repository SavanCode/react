import React from 'react' 
import Modal from "react-modal"

const PopModal=(props)=>{
    return (
        <div>
        <Modal 
         style={
          { overlay: {}, 
          content: {
            width: 'fit-content',
            height: 'fit-content',
            margin:' auto',
            background: '#464b5e',
            color: 'whitesmoke'
          } }
        }
           isOpen={!!props.error}
           onRequestClose={props.clearError}
           ariaHideApp={false}
        >
          <p className="modalItem">{props.error}</p>
          <button className=" modalItem acceptBtn" onClick={props.clearError}>ok</button>
        </Modal>
        </div>
    )
}

export default PopModal