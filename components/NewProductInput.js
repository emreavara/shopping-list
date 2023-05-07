import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import {
  addToProductList,
  deleteFromProductList,
  getProductList,
} from "../redux/actions/productListActions";

import ShortUniqueId from "short-unique-id";

import { COLOR_PALETTE } from "../style/Colors";
import { TRANSLATIONS_TR } from "../translations/tr-Tr/translations";
import CustomButton from "./common/CustomButton";
import ProductItem from "./ProductItem";

function NewProductInput({ isModalVisible, setIsModalVisible }) {
  const uid = new ShortUniqueId({ length: 6 });
  const [product, setProduct] = useState({
    id: uid(),
    name: "",
    amount: "",
  });

  const dispatch = useDispatch();

  const productList = useSelector((store) => store.productListReducer);

  const handleAddProduct = () => {
    dispatch(addToProductList(product));
    setProduct({
      id: uid(),
      name: "",
      amount: "",
    });
  };

  console.log("################# \n PRODUCT LIST: ", productList);
  console.log(product);

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
              onChangeText={(name) => setProduct({ ...product, name: name })}
            />
            <TextInput
              placeholder="Amount"
              style={styles.productName}
              onChangeText={(amount) =>
                setProduct({ ...product, amount: amount })
              }
            />
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={handleAddProduct} title="Add" />
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
