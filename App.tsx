/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

import Menu from "./components/menu";
import TodoList from "./components/todo-list";
import ITodo from "./models/todo.model";
import EditTodoView from "./views/edit-todo.view";

export default function App() {
  const [data, setData] = useState<ITodo[]>([]);
  const [isEditTodoVisible, setIsEditTodoVisible] = useState(false);

  const onAddTodo = () => {
    setIsEditTodoVisible(true);
  };

  const onCloseEditTodo = () => {
    setIsEditTodoVisible(false);
  };

  const onSaveTodo = (newData: ITodo) => {
    setData((d) => [...d, newData]);
    setIsEditTodoVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>ToDo</Text>
      <TodoList data={data} />
      <Menu onAddTodo={onAddTodo} />
      <EditTodoView
        isVisible={isEditTodoVisible}
        onClose={onCloseEditTodo}
        onSave={onSaveTodo}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 20,
    paddingBottom: 0,
  },
});
