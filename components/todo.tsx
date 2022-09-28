/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import ITodo from "../models/todo.model";

interface ITodoProps {
  data: ITodo;
}

const Todo = (props: ITodoProps) => {
  const [isDone, setDone] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: props.data.color }]}>
      <BouncyCheckbox
        fillColor="black"
        unfillColor="#FFFFFF"
        iconStyle={{ borderColor: "black" }}
        isChecked={isDone}
        onPress={setDone}
        style={styles.checkbox}
      />

      <Text style={styles.text}>{props.data.text}</Text>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  checkbox: {
    height: 40,
    minWidth: 40,
    width: 40,
  },
  container: {
    alignItems: "center",
    borderRadius: 5,
    color: "black",
    display: "flex",
    flexDirection: "row",
    height: "auto",
    justifyContent: "flex-start",
    marginBottom: 5,
    minHeight: 30,
    padding: 10,
    width: "100%",
  },
  text: {
    color: "black",
    width: "100%",
  },
});
