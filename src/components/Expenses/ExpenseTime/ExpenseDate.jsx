import "./ExpenseDate.css";

function ExpenseDate(props) {
  let month = props.date.toLocaleString("en-US", { month: "long" });
  let day = props.date.toLocaleString("en-US", { day: "2-digit" });
  let year = props.date.getYear()

   const dateSecond= new Date();
   const yearSecond = dateSecond.getFullYear()
   let givenTime;
   if(yearSecond > year){
    givenTime = yearSecond - year +  "-year ago"
   } else if(yearSecond === year){
    givenTime = yearSecond
   }else{
    givenTime = "Error"
   }
  
  return (
    <div className="expense-time">
      <div className="expense-time__month">{month}</div>
      <div className="expense-time__day">{day}</div>
      <div className="expense-time__year">{givenTime}</div>
    </div>
  );
}
export default ExpenseDate;
