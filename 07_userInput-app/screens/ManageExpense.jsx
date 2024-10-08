import { View, StyleSheet } from 'react-native'
import { useContext, useLayoutEffect } from 'react'
import IconButton from '../components/ui/IconButton';
import { GlobalStyles } from '../constants/style';
import { ExpensesContext } from '../store/expenses-context';
import ExpenseForm from '../components/manageExpense/ExpenseForm';

export default function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId
  const isEditing = !!editedExpenseId;

  const expensesCtx = useContext(ExpensesContext)
  const selectedExpense = expensesCtx.expenses.find(expense => expense.id === editedExpenseId)
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
  }, [navigation]
  )
  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(editedExpenseId)
    navigation.goBack();
  }
  function cancelHandler() {
    navigation.goBack();
  }
  function confirmHandler(expenseData) {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, expenseData)
    } else {
      expensesCtx.addExpense(expenseData)
    }
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <ExpenseForm onCancel={cancelHandler} onSubmit={confirmHandler} submitButtonLabel={isEditing ? "Update" : "Add"} defaultValues={selectedExpense} />
      {isEditing &&
        <View style={styles.deleteContainer}><IconButton icon="trash" color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler} />
        </View>}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  }
})