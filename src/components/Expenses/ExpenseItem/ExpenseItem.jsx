import ExpenseDate from "../ExpenseTime/ExpenseDate";
import "./ExpenseItem.css";
import { useState } from "react";

export default function ExpenseItem({ title, amount, date }) {
  // const [localTitle, setLocalTitle] = useState(title);
  // let localTitle = title;
  // function titleChanger() {
  //   setLocalTitle("Updated");
  // }

  return (
    <div className="expense-item">
      {/* <div>{date.toISOString()}</div> */}
      <ExpenseDate date={new Date(date)} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}$</div>
        {/* <button onClick={titleChanger} className="btn-delete">Title Change</button> */}
      </div>
    </div>
  );
}
