import React,{ useContext,useState } from 'react'; 
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {v4 as uuidv4} from 'uuid' 
import accountListContext from '../context/accountListContext'

const AddAccountPage=(props)=>{
   
  const [userName, setUserName] = useState("");
  const [location, setLocation] = useState("");
  const [error, handleError] = useState("");
  const {state,Dispatch} = useContext(accountListContext); 

  const handleSubmitAccount=(e)=>{
    e.preventDefault(); 
    let existed = state.filter((ele)=>(ele.userName===userName))
    if (!userName || !location) {
      handleError("Please provide userName and Location!")
    }else if(existed.length !==0){
      handleError("Please enter new userName, this userName already been used")   
    }else{ 
      Dispatch({type: "ADD",account:{id:uuidv4(),userName:userName,location:location}});
      props.history.push("/view");
      setUserName("");
      setLocation("");
      handleError("");
    }    
  }

  return(
    <div> 
       {error && <p className="errorMsg">{error}</p>} 
         <Form onSubmit={handleSubmitAccount} >
           <Form.Group controlId="formBasicUserName">
             <Form.Label>UserName</Form.Label>
             <Form.Control type="text" placeholder="Enter UserName" value={userName} onChange={(e)=>setUserName( e.target.value.replace(/\s+/g,""))} />
             <Form.Text className="text-muted">
               We will check whether your username has been used
             </Form.Text>
           </Form.Group> 
            <Form.Group controlId="formBasicLocation">
             <Form.Label>Location</Form.Label>
             <Form.Control type="text" placeholder="Location"  value={location} onChange={(e)=>setLocation( e.target.value.replace(/\s+/g,""))}/>
           </Form.Group> 
           <Button variant="secondary"  type="submit">
             Create
           </Button>
         </Form>
     </div>
  )
}

export default  AddAccountPage