import React, { useContext } from 'react'
import ExpensesOutput from '../components/ExpenseOutput/ExpenseOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context'
import { getDateMinusDays } from '../util/date'

export default function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext)
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo
  })
  return <ExpensesOutput expensesPeriod="Last 7Days" expenses={recentExpenses} fallbackText="No expenses" />
}