import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

function renderExpenseItem(item) {
  return <Text>{item.item.description}</Text>
}

export default function ExpensesList({ expenses }) {
  return <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id} />

}
const styles = StyleSheet.create({})