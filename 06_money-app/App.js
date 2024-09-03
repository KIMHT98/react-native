import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import { GlobalStyles } from "./constants/style";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "./components/ui/IconButton";
import ExpensesContextProvider from "./store/expenses-context";
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
function ExpensesOverview() {
    return (
        <BottomTab.Navigator
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: GlobalStyles.colors.primary500,
                },
                headerTintColor: "white",
                tabBarStyle: {
                    backgroundColor: GlobalStyles.colors.primary500,
                },
                tabBarActiveTintColor: GlobalStyles.colors.accent500,
                headerRight: () => (
                    <IconButton
                        icon="add"
                        size={24}
                        color="white"
                        onPress={() => {
                            navigation.navigate("ManageExpense");
                        }}
                    />
                ),
            })}
        >
            <BottomTab.Screen
                name="AllExpenses"
                component={RecentExpenses}
                options={{
                    title: "Recent Expenses",
                    tabBarLabel: "Recent",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="hourglass" size={size} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="RecentExpenses"
                component={AllExpenses}
                options={{
                    title: "All Expenses",
                    tabBarLabel: "All Expenses",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="calendar" size={size} color={color} />
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
            <ExpensesContextProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerStyle: {
                                backgroundColor: GlobalStyles.colors.primary500,
                            },
                            headerTintColor: "white",
                        }}
                    >
                        <Stack.Screen
                            name="ExpensesOverview"
                            component={ExpensesOverview}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="ManageExpense"
                            component={ManageExpense}
                            options={{
                                title: "Manage Expense",
                                presentation: "modal",
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </ExpensesContextProvider>
        </>
    );
}
