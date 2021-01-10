import React from 'react'
import {connect} from 'react-redux'
import {setTextFilter,sortByDate,sortByAmount} from '../actions/filters'
//import moment from 'moment'
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css"; 
import { DateRangePicker} from 'react-dates';
import {setStartDate,setEndDate} from '../actions/filters'
 
class ExpenseListFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate:null,
      endDate:null,
     focusedInput:null
    };
  }
  //这里的input是直接可以取到的，直接进行逻辑的操作
  onDatesChange=({startDate,endDate})=>{
    console.log({startDate,endDate});
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate)); 
  }
  onFocusChange=(focusedInput)=>{
    this.setState({ focusedInput }) 
  }
  
  render() {
    
    return (
    <div className="filters">
        <input 
        className="keywordFilter"
        type="text" 
        placeholder="Please enter keyword to filter"
        value={this.props.filters.text}
        onChange={(e)=>{ this.props.dispatch(setTextFilter(e.target.value)) 
        }}
        />
        <select
        value={this.props.filters.sortBy}
        onChange={(e)=>{
          e.target.value === "date" ?  this.props.dispatch(sortByDate()) : this.props.dispatch(sortByAmount());
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option> 
        </select> 

        <DateRangePicker
          startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
          isOutsideRange={()=>false}//当前时间之前的也可以加入
          showClearDates
        />

    </div>
 
    )}
  }
 
const mapStateToProps = (state /*, ownProps*/) => {
    return {
      filters:state.filters
    }
  }

export default  connect(mapStateToProps)(ExpenseListFilters) ;
 