import {
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useLayoutEffect } from "react";
import {
  CATEGORIES,
  MEALS,
} from "../data/dummy-data";
import MealItem from "../components/MealItem";
export default function MealsOverViewScreen({
  route,
  navigation,
}) {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

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
        data={displayedMeals}
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
