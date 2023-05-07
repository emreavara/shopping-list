import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLOR_PALETTE } from "../../style/Colors";
function CustomButton({ onPress, title }) {
  return (
    <TouchableOpacity style={styles.outerContainer} onPress={onPress}>
      <View style={styles.innerContainer}>
        <Text style={styles.textStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  outerContainer: {
    height: 200,
    width: 100,
  },
  innerContainer: {
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: COLOR_PALETTE.BLUE,
  },
  textStyle: {
    fontSize: 32,
    color: COLOR_PALETTE.CREAM,
  },
});
