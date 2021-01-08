import React from 'react';
import {addAccount} from '../action/accountAction'
import {connect} from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class AddAccountPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      userName:"",
      location:"",
      error:""
    }
    this.currentAccountList=props.state
  }

  handleUsernameChange=(event)=>{ 
    this.setState({
      userName: event.target.value.replace(/\s+/g,"")
    })
  }
  
  handleLocationChange=(event)=>{  
    this.setState({
      location: event.target.value.replace(/\s+/g,"")
    })
  }

  handleSubmitAccount=(e)=>{
    e.preventDefault();
    let newName =this.state.userName;
    let newLocation =this.state.location; 
    let existed = this.currentAccountList.filter((ele)=>(ele.userName===newName))
    console.log(existed)
    if (!newName || !newLocation) {
      this.setState({
        error: "Please provide userName and Location!"
      });    
    }else if(existed.length !==0){
      console.log("copy",existed,newName)
      this.setState({
        error: "Please enter new userName, this userName already been used"
      });    
    }else{ 
      this.props.dispatch(addAccount({userName:newName,location:newLocation}));
      this.props.history.push("/view");
      this.setState({
        userName:"",
        location:"",
        error:""
      })
    }    
  }
  
  render(){ 
    console.log("AddAccountPage",this.props)
    return (
    <div> 
      {this.state.error && <p className="errorMsg">{this.state.error}</p>} 
        <Form onSubmit={this.handleSubmitAccount} >
          <Form.Group controlId="formBasicUserName">
            <Form.Label>UserName</Form.Label>
            <Form.Control type="text" placeholder="Enter UserName" value={this.state.userName}  onChange={this.handleUsernameChange} />
            <Form.Text className="text-muted">
              We will chewck whether your username has been used
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Location"  value={this.state.location}  onChange={this.handleLocationChange}/>
          </Form.Group> 
          <Button variant="secondary"  type="submit">
            Create
          </Button>
        </Form>

    </div>
    )
  }
}


const mapStateToProps = (state) => {
  return  {
    state
  }
} 
export default connect(mapStateToProps)(AddAccountPage)