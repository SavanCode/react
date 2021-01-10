import React from 'react'
import moment from 'moment'
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";

const now = moment();
console.log(now.format("Do, MMM YYYY"));

export default class ExpenseForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          description: props.expense ? props.expense.description : "",
          note: props.expense ? props.expense.note : "",
          amount: props.expense ? (props.expense.amount / 100).toString() : "",
          createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
          calendarFocused: false,
          error: ""
        };
      }

    onDescriptionChange =(e)=>{ 
        //console.log(e.target.value);
        this.setState(state => ({
            description: e.target.value
          }));
    }
    onAmountChange=(e)=>{
        //console.log(e.target.value);
        this.setState(state => ({
            amount: e.target.value
          }));
    }
    onDateChange=(createdAt)=>{
        if(createdAt){
            this.setState({createdAt})
        }
    }

    onFocusChange=({ focused }) => {this.setState({ canlendarFocused: focused })};

    onNoteChange=(e)=>{
        //console.log(e.target.value);
        this.setState(state => ({
            note: e.target.value
          }));
    }

    onSubmit=(e)=>{
        e.preventDefault();  

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({
            error: "Please provide description and amount!"
            }));
        } else {
            console.log("submitting");
            this.props.onSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount,10)*100,
                note:this.state.note,
                createdAt:this.state.createdAt.valueOf()
            })
        }  
    }


    render(){
        return (
        <div className="expenseForm">
                  {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Description" autoFocus    value={this.state.description} onChange={this.onDescriptionChange} />
                <input type="text" placeholder="Amount"   value={this.state.amount} onChange={this.onAmountChange} />
        
                {/* 此处用airbnb date pick */}
                <SingleDatePicker
                    date={this.state.createdAt} // momentPropTypes.momentObj or null
                    onDateChange={this.onDateChange} // PropTypes.func.isRequired
                    focused={this.state.canlendarFocused} // PropTypes.bool
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
                    id="single_date_picker" // PropTypes.string.isRequired,
                    isOutsideRange={()=>false}//当前时间之前的也可以加入
                    numberOfMonths={1}//只显示一个月
                />

                <textarea type="text" placeholder="add note if you need (optional)" value={this.state.note} onChange={this.onNoteChange} ></textarea>
                <button>Add expense</button>
            </form>
        </div>
        )
    }
} 
