/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React from "react";
import { Button, StyleSheet, View } from "react-native";

interface IMenu {
  onAddTodo: () => void;
}

const Menu = (props: IMenu) => {
  return (
    <View style={styles.container}>
      <Button title="+ Add ToDo" onPress={() => props.onAddTodo()} />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    color: "black",
    display: "flex",
    flexDirection: "row",
    height: "auto",
    justifyContent: "center",
    minHeight: 30,
    padding: 20,
    width: "100%",
  },
});
