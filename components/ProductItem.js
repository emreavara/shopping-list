import React from "react";
import { View, Text, Pressable, StyleSheet, Dimensions } from "react-native";
import { COLOR_PALETTE } from "../style/Colors";

const { width, height } = Dimensions.get("screen");

function ProductItem({ product }) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.pressableButton,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => console.log("Pressed")}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.productNameText}> {product.name}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default ProductItem;
const styles = StyleSheet.create({
  outerContainer: {
    height: "5%",
    margin: 3,
  },
  pressableButton: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  innerContainer: {
    flex: 1,
    padding: 2,
    paddingLeft: 24,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLOR_PALETTE.GREEN,
  },
  productNameText: {
    fontSize: 18,
    color: COLOR_PALETTE.CREAM,
  },
});
