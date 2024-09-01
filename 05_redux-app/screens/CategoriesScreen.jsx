import {
  View,
  Text,
  FlatList,
} from "react-native";
import React from "react";
import { CATEGORIES } from "./../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

export default function CategoriesScreen({
  navigation,
}) {
  function renderCategoryItem(item) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: item.item.id,
      });
    }
    return (
      <CategoryGridTile
        title={item.item.title}
        color={item.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    ></FlatList>
  );
}
