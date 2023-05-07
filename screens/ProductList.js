import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { PRODUCTS } from "../data/Products";
import ProductItem from "../components/ProductItem";
import { COLOR_PALETTE } from "../style/Colors";
import NewProductInput from "../components/NewProductInput";
function ProductList({ route, navigation }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  navigation.setOptions({
    headerRight: () => (
      <Button
        title="ADD"
        color="black"
        onPress={() => setIsModalVisible(!isModalVisible)}
      />
    ),
  });
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.productListContainer}>
        {PRODUCTS.map((product, index) => {
          return <ProductItem key={index} product={product} />;
        })}
      </View>
      <View>
        <NewProductInput
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      </View>
    </View>
  );
}

export default ProductList;

const styles = StyleSheet.create({
  productListContainer: {
    flex: 1,
  },
});
