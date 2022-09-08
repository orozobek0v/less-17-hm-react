import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ addExpenseHandler }) => {
  const [titleValue, setTitleValue] = useState("");
  const [amountValue, setAmountValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  const getTitle = (e) => {
    setTitleValue(e.target.value);
  };
  const getAmount = (e) => {
    setAmountValue(e.target.value);
  };
  const getDate = (e) => {
    setDateValue(e.target.value);
  };
  const sumbitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      id: Math.random(),
      title: titleValue,
      amount: amountValue,
      date: new Date(dateValue),
    };
    addExpenseHandler(expenseData);
    setTitleValue("");
    setAmountValue("");
    setDateValue("");
  };

  return (
    <form onSubmit={sumbitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={(e) => {
              getTitle(e);
            }}
            value={titleValue}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={(e) => getAmount(e)}
            value={amountValue}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={(e) => getDate(e)}
            value={dateValue}
            type="date"
            min="2021-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
