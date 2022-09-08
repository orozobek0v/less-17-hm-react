import ExpenseForm from "../ExpenseForm/ExpenseForm"
import "./AddExpense.css";

function AddExpense({ addExpenseHandler }) {
  return (
    <div className="new-expense">
      <ExpenseForm addExpenseHandler={addExpenseHandler} />
    </div>
  );
}
export default AddExpense;
