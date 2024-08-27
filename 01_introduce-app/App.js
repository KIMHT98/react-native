import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [courseGoals, setCourseGoals] = useState(
    []
  );
  const [isModalOpen, setIsModalOpen] =
    useState(false);
  function startAddGoalHnadler() {
    setIsModalOpen(true);
  }
  function endAddGoalHandler() {
    setIsModalOpen(false);
  }
  function addGoalHandler(inputValue) {
    setCourseGoals((prev) => [
      ...prev,
      {
        text: inputValue,
        id: Math.random().toString(),
      },
    ]);
    endAddGoalHandler();
  }
  function deleteGoalHandler(id) {
    setCourseGoals((prev) => {
      return prev.filter(
        (goal) => goal.id !== id
      );
    });
  }
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        <Button
          title="새로운 계획 추가"
          color="#a065ec"
          onPress={startAddGoalHnadler}
        />

        <GoalInput
          onAddGoal={addGoalHandler}
          visible={isModalOpen}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(item) => {
              return (
                <GoalItem
                  item={item}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },

  goalsContainer: {
    flex: 4,
  },
});
