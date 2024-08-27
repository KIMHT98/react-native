import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
const GoalInput = (props) => {
  const [inputValue, setInputValue] =
    useState("");
  function goalInputHandler(enteredText) {
    setInputValue(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(inputValue);
    setInputValue("");
  }
  return (
    <Modal
      visible={props.visible}
      animationType="slide"
    >
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="여기가 인풋"
          onChangeText={goalInputHandler}
          value={inputValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="나는 버튼!"
              onPress={addGoalHandler}
              color="#b180f0"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="취소"
              onPress={props.onCancel}
              color="#f31282"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5e0acc",
  },
  buttonContainer: {
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#e4d0ff",
    width: "90%",
    padding: 8,
    backgroundColor: "white",
    borderRadius: 10,
  },
  button: {
    width: "30%",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 24,
  },
});
