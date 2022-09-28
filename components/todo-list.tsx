/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React from "react";
import { StyleSheet, FlatList } from "react-native";

import Todo from "./todo";

import ITodo from "../models/todo.model";

interface ITodoListProps {
  data: ITodo[];
}

const TodoList = (props: ITodoListProps) => {
  return (
    <FlatList
      style={styles.container}
      data={props.data}
      renderItem={(item: ITodo) => {
        return <Todo data={item.item} />;
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: 500,
    overflow: "scroll",
    padding: 10,
    width: "100%",
  },
});
