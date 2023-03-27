import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./screens/MainScreen";
import ProductList from "./screens/ProductList";
import ShoppingList from "./screens/ShoppingList";
import { COLOR_PALETTE } from "./style/Colors";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: COLOR_PALETTE.BLUE,
          },
          headerTintColor: "white",
          title: "Alisveris Listem",
          contentStyle: {
            backgroundColor: COLOR_PALETTE.CREAM,
          },
        }}
      >
        <Stack.Screen name="MainScreen" component={MainScreen}></Stack.Screen>
        <Stack.Screen name="ProductList" component={ProductList}></Stack.Screen>
        <Stack.Screen
          name="ShoppingList"
          component={ShoppingList}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
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
