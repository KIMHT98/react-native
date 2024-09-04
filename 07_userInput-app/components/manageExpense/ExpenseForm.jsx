import { View, Text, StyleSheet, Alert } from 'react-native'
import Button from '../ui/Button'
import React, { useState } from 'react'
import Input from './Input'
import { GlobalStyles } from '../../constants/style';

export default function ExpenseForm({ onSubmit, onCancel, submitButtonLabel, defaultValues }) {
  const [inputValues, setInputValues] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : '',
      isValid: true
    },
    date: {
      value: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : '',
      isValid: true
    },
    description: {
      value: defaultValues ? defaultValues.description : '',
      isValid: true
    }
  });
  function inputChangedHandler(inputIdentifier, enteredText) {
    setInputValues((prev) => {
      return {
        ...prev,
        [inputIdentifier]: { value: enteredText, isValid: true }
      }
    })
  }
  function submitHandler() {
    const expenseData = {
      amount: +inputValues.amount.value,
      date: new Date(inputValues.date.value),
      description: inputValues.description.value
    }

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputValues((prev) => {
        return {
          amount: { value: prev.amount.value, isValid: amountIsValid },
          date: { value: prev.date.value, isValid: dateIsValid },
          description: { value: prev.description.value, isValid: descriptionIsValid }
        }
      })
      return;
    }

    onSubmit(expenseData)
  }
  const formIsInvalid = !inputValues.amount.isValid || !inputValues.date.isValid || !inputValues.description.isValid
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input label="Amount" textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: inputChangedHandler.bind(this, 'amount'),
          value: inputValues.amount.value
        }} invalid={!inputValues.amount.isValid} style={styles.rowInput} />
        <Input label="Date" textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: inputChangedHandler.bind(this, 'date'),
          value: inputValues.date.value
        }} invalid={!inputValues.date.isValid} style={styles.rowInput} />
      </View>
      <Input label="Description" textInputConfig={{
        multiline: true,
        autoCorrect: false,
        autoCapitalize: 'none',
        onChangeText: inputChangedHandler.bind(this, 'description'),
        value: inputValues.description.value
      }} invalid={!inputValues.description.isValid}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>Invalid input values - please check your entered data!</Text>
      )}
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>Cancel</Button>
        <Button style={styles.button} onPress={submitHandler} >{submitButtonLabel}</Button>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  form: {
    marginTop: 80
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 24,
    textAlign: 'center'
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  errorText: {
    textAlign: 'center',
    color: GlobalStyles.colors.error500,
    margin: 8
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'

  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  rowInput: {
    flex: 1
  }
})