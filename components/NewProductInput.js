import React from "react";
import {
  View,
  SafeAreaView,
  TextInput,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";
import { COLOR_PALETTE } from "../style/Colors";

function NewProductInput() {
  return (
    <View style={styles.outerContainer}>
      <Text style={[styles.text, styles.infoText]}>Yeni Bir Urun Ekle</Text>
      <TextInput style={styles.productName} placeholder="Urun adi" />
    </View>
  );
}

export default NewProductInput;

const styles = StyleSheet.create({
  outerContainer: {
    padding: 20,
    margin: 20,
    borderRadius: 8,
    flex: 1,
    height: 10,
    backgroundColor: COLOR_PALETTE.DARKBLUE,
  },
  text: {
    fontSize: 16,
    color: "white",
  },
  infoText: {},
  productName: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
