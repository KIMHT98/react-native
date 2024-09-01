import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import MealsDetailScreen from "./screens/MealsDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteScreens from "./screens/FavoriteScreens";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();
function DrawerNavigater() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "white",
        sceneContainerStyle: {
          backgroundColor: "#3f2f25",
        },
        drawerContentStyle: {
          backgroundColor: "#351401",
        },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="list"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoriteScreens}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="star"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
function BottomTabNavigater() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#351401",
        },
        tabBarActiveTintColor: "#e4baa1",
        tabBarInactiveTintColor: "white",
        tabBarActiveBackgroundColor: "#351401",
      }}
    >
      <BottomTab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="list"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={FavoriteScreens}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="star"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#3f2f25",
            },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={BottomTabNavigater}
            options={{
              title: "All Categories",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverViewScreen}
            options={({ route, navigation }) => {
              const catId =
                route.params.categoryId;
              return {
                title: catId,
              };
            }}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealsDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
