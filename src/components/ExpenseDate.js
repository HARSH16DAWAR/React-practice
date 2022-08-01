import './ExpenseDate.css';

export default function ExpenseDate(props) {
  const expenseDate = props.date;
  const month = expenseDate.toLocaleString('en-US', {month: 'long'});
  const day = expenseDate.toLocaleString('en-US', {day: 'numeric'});
  const year = expenseDate.toLocaleString('en-US', {year: 'numeric'});

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}
