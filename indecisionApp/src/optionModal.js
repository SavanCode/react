import React from 'react' 
import Modal from "react-modal"

const OptionModal=(props)=>{
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
           isOpen={!!props.pickedOption}
           onRequestClose={props.clearPickedOption}
           ariaHideApp={false}
        >
          <p className="modalItem">You should definately...</p>
          <p className="modalItem">{props.pickedOption}</p>
          <button className=" modalItem acceptBtn" onClick={props.clearPickedOption}>Thanks for that idea!</button>
        </Modal>
        </div>
    )
}

export default OptionModal