import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { COLOR_PALETTE } from "../style/Colors";
import { useNavigation } from "@react-navigation/native";

function MenuItem({ item }) {
  const navigation = useNavigation();
  function navigateToSelectedComponent() {
    navigation.navigate(item.component);
  }
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.pressableButton,
          pressed && styles.buttonPressed,
        ]}
        onPress={navigateToSelectedComponent}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.textContent}>{item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MenuItem;

const styles = StyleSheet.create({
  outerContainer: {
    height: "10%",
    margin: 8,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  pressableButton: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: COLOR_PALETTE.BROWN,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  textContent: {
    fontSize: 18,
    fontWeight: "bold",
    overflow: "hidden",
  },
});
