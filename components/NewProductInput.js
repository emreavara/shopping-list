import React, { useRef } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import { COLOR_PALETTE } from "../style/Colors";
import { TRANSLATIONS_TR } from "../translations/tr-Tr/translations";
import CustomButton from "./common/CustomButton";

function NewProductInput({ isModalVisible, setIsModalVisible }) {
  return (
    <Modal
      animationType="slide"
      visible={isModalVisible}
      transparent
      onRequestClose={() => setIsModalVisible(false)}
      onPointerCancel={() => setIsModalVisible(false)}
    >
      <TouchableOpacity
        style={styles.modalWrapper}
        onPress={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContent}>
          <View style={styles.innerContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.infoText}>Add a new product</Text>
            </View>
            <TextInput
              placeholder="Product Name"
              style={styles.productName}
              onChangeText={(text) => {
                productNameRef.current = text;
              }}
            />
            <TextInput placeholder="Amount" style={styles.productName} />
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={() => console.log("Added")} title="Add" />
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

export default NewProductInput;

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
    padding: 4,
  },
  modalWrapper: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
  },
  innerContainer: {
    flex: 5,
  },
  modalContent: {
    backgroundColor: "white",
    marginHorizontal: 20,
    borderRadius: 8,
    minHeight: 300,
  },
  infoText: {
    fontSize: 24,
  },
  productName: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
    margin: 8,
    padding: 8,
    alignItems: "center",
  },
});
