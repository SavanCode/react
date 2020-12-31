import moment from 'moment'
const getVisibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((element)=>{
      /* 后于startday ok 先于 endday ok */
      const startDateMatch = startDate ? moment(element.createdAt).isSameOrAfter(startDate,'day') : true;
      const endDateMatch = endDate ? moment(element.createdAt).isSameOrBefore(endDate,'day'): true;
      const textMatch = element.description.toLowerCase().includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
      if(sortBy === "date"){
        return a.createdAt > b.createdAt ? 1 : -1;
      }else if(sortBy === "amount"){
        return a.amount > b.amount ? 1 : -1;
      }
    })
  }

  export default getVisibleExpenses;