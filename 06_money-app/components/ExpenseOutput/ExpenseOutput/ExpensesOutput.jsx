import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { GlobalStyles } from '../../../constants/style'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.29,
    date: new Date('2021-12-25'),
  },
  {
    id: 'e3',
    description: 'Chicken',
    amount: 20.12,
    date: new Date('2022-01-02'),
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 14.99,
    date: new Date('2022-02-01'),
  },
  {
    id: 'e5',
    description: 'A pizza',
    amount: 21.99,
    date: new Date('2022-02-05'),
  }
]

export default function ExpensesOutput({ expenses, expensesPeriod }) {

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700
  }
})