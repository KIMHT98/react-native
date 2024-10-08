import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import ExpenseItem from './ExpenseItem'

function renderExpenseItem(item) {
  return <ExpenseItem {...item.item} />
}

export default function ExpensesList({ expenses }) {
  return <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id} />

}
const styles = StyleSheet.create({})