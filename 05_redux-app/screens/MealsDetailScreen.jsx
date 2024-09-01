import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, {
  useContext,
  useLayoutEffect,
} from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
// import { FavoritesContext } from "./../store/context/favorites-context";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../store/redux/favorites";
export default function MealsDetailScreen({
  route,
  navigation,
}) {
  // const favoriteMealsCtx = useContext(
  //   FavoritesContext
  // );
  const favoriteMealIds = useSelector(
    (state) => state.favoriteMeals.ids
  );
  const dispatch = useDispatch();
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find(
    (meal) => meal.id === mealId
  );
  const mealIsFavorite =
    favoriteMealIds.includes(mealId);
  // favoriteMealsCtx.ids.includes(mealId);
  function changeFavoriteSTatusHandler() {
    if (mealIsFavorite) {
      // favoriteMealsCtx.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // favoriteMealsCtx.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoriteSTatusHandler}
            icon="star"
            color={
              mealIsFavorite ? "yellow" : "white"
            }
          />
        );
      },
    });
  }, [navigation, changeFavoriteSTatusHandler]);
  return (
    <ScrollView style={styles.rootContainer}>
      <View>
        <Image
          source={{ uri: selectedMeal.imageUrl }}
          style={styles.image}
        />
        <Text style={styles.title}>
          {selectedMeal.title}
        </Text>
        <MealDetails
          duration={selectedMeal.duration}
          affordability={
            selectedMeal.affordability
          }
          complexity={selectedMeal.complexity}
          textStyle={styles.detailText}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List
              data={selectedMeal.ingredients}
            />
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
