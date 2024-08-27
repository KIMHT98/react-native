import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

const GoalItem = (props) => {
  return (
    <View
      key={props.item.item.id}
      style={styles.goalItem}
    >
      <Pressable
        android_ripple={{ color: "green" }}
        onPress={props.onDeleteItem.bind(
          this,
          props.item.item.id
        )}
      >
        <Text
          style={{ color: "white", padding: 8 }}
        >
          {props.item.item.text}
        </Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
});
