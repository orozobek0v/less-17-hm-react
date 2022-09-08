import { useEffect, useReducer, useState } from "react";
import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem/ExpenseItem";
import LoadingExpense from "./components/LoadingExpense/LoadingExpense";
import AddExpense from "./components/NewExpense/AddExpense/AddExpense";

function App() {
  useEffect(() => {
    getData();
  }, []);
  const [loading, setLoading] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = async (expense) => {
    await fetch(
      "https://feth-todo-list-default-rtdb.firebaseio.com/todo-list.json",
      {
        method: "POST",
        body: JSON.stringify(expense),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    setLoading(true);
  };
  const getData = async () => {
    const response = await fetch(
      "https://feth-todo-list-default-rtdb.firebaseio.com/todo-list.json"
    );
    const data = await response.json();
    const loaded = [];
    for (const key in data) {
      loaded.push({
        amount: data[key].amount,
        id: key,
        title: data[key].title,
        date: data[key].date,
      });
    }
    setExpenses(loaded);
    setLoading(false);
  };
  return (
    <div className="App">
      <AddExpense addExpenseHandler={addExpenseHandler} />
	  <LoadingExpense loading={loading} setLoading={setLoading} />
      {expenses.map((el, i, arr) => {
        return (
          <ExpenseItem
            key={el.id}
            title={el.title}
            amount={el.amount}
            date={el.date}
          />
        );
      })}
    </div>
  );
}

export default App;
