import { Button, StyleSheet, TextInput, View } from "react-native"
import PrimaryButton from "../components/PrimaryButton"

function StartGameScreen() {

  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none"
        autoCorrect={false} />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  )
}

export default StartGameScreen
const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginHorizontal: 24,
    marginTop: 100,
    backgroundColor: '#72063c',
    borderRadius: 8,
    elevation: 5
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})