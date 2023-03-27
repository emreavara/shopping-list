import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MenuItem from "../components/MenuItem";
import { MAIN_SCREEN_LIST } from "../data/mainScreenList";
function MainScreen() {
  return (
    <View style={styles.menuContainer}>
      {MAIN_SCREEN_LIST.map((mainListItem) => {
        return <MenuItem key={mainListItem.id} item={mainListItem} />;
      })}
    </View>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
  },
});
