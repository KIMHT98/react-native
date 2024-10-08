import { useContext } from 'react'
import ExpensesOutput from '../components/ExpenseOutput/ExpenseOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context'

export default function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext)
  return <ExpensesOutput
    expenses={expensesCtx.expenses} expensesPeriod="Total" fallbackText="No expenses" />
}