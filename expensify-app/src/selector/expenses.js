export default (expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((element)=>{
      //if not set the startdate and createdAt is ok
      const startDateMatch = typeof startDate !== 'number' || element.createdAt >= startDate;
      const endDateMatch =  typeof endDate !== 'number' || element.createdAt <= endDate;
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