import {
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import MealItem from "../MealItem";

export default function MealsList({ items }) {
  function renderMealItem(item) {
    const meal = item.item;
    const mealItemProps = {
      id: meal.id,
      title: meal.title,
      imageUrl: meal.imageUrl,
      affordability: meal.affordability,
      complexity: meal.complexity,
      duration: meal.duration,
    };
    return <MealItem {...mealItemProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        key={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
