/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import ITodo from "../models/todo.model";

interface IEditTodoProps {
  isVisible: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
  data?: ITodo;
}

const EditTodoView = (props: IEditTodoProps) => {
  const colors = ["#87D3F5", "#BDE991", "#BAAAFB"];
  const [colorIndex, setColorIndex] = useState(0);

  const title = props.data ? "Edit Todo" : "Add Todo";
  const [text, setText] = useState(props.data?.text || "");

  const onSave = () => {
    if (text.trim().length === 0) {
      props.onClose();
      return;
    }
    if (props.data) {
      const newData = {
        ...props.data,
        text,
      };
      props.onSave(newData);
    } else {
      const newData = {
        id: "id-" + Math.floor(Math.random() * 10000000),
        text,
        done: false,
        color: colors[colorIndex],
      };
      props.onSave(newData);
    }
  };

  return (
    <Modal
      visible={props.isVisible}
      style={styles.modal}
      animationType="slide"
      transparent={true}
    >
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.content}>
          <Text style={styles.label}>ToDo Text:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setText}
            value={props.data?.text}
            multiline={true}
            numberOfLines={10}
            // keyboardType="numeric"
          />

          <Text style={styles.label}>ToDo Color:</Text>
          <View style={styles.colors}>
            <View
              style={[
                styles.color,
                {
                  backgroundColor: colors[0],
                  borderColor: "black",
                  borderWidth: colorIndex === 0 ? 4 : 0,
                },
              ]}
            >
              <TouchableOpacity
                style={{ height: "100%", width: "100%" }}
                onPress={() => setColorIndex(0)}
              ></TouchableOpacity>
            </View>
            <View
              style={[
                styles.color,
                {
                  backgroundColor: colors[1],
                  borderColor: "black",
                  borderWidth: colorIndex === 1 ? 4 : 0,
                },
              ]}
            >
              <TouchableOpacity
                style={{ height: "100%", width: "100%" }}
                onPress={() => setColorIndex(1)}
              ></TouchableOpacity>
            </View>
            <View
              style={[
                styles.color,
                {
                  backgroundColor: colors[2],
                  borderColor: "black",
                  borderWidth: colorIndex === 2 ? 4 : 0,
                },
              ]}
            >
              <TouchableOpacity
                style={{ height: "100%", width: "100%" }}
                onPress={() => setColorIndex(2)}
              ></TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.onClose()}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onSave}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default EditTodoView;

const styles = StyleSheet.create({
  button: {
    height: 20,
    width: 100,
  },
  buttonText: {
    color: "#007fff",
    fontSize: 18,
  },
  color: {
    borderRadius: 3,
    height: 30,
    marginRight: 20,
    width: 30,
  },
  colors: {
    display: "flex",
    flexDirection: "row",
    padding: 20,
    width: "100%",
  },
  container: {
    width: "100%",
    height: "100%",
    paddingTop: 100,
    // backgroundColor: '#fff',
    backgroundColor: "rgba(0,0,0,0.7)",
    flexDirection: "column",
  },
  content: {
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  input: {
    borderWidth: 1,
    height: "auto",
    margin: 12,
    padding: 10,
  },
  label: {
    padding: 10,
    paddingBottom: 0,
  },
  menu: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    height: 60,
    justifyContent: "space-between",
    paddingLeft: 30,
    paddingTop: 15,
    width: "100%",
  },
  modal: {
    backgroundColor: "rgba(0,0,0,0)",
  },
  title: {
    backgroundColor: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    padding: 20,
    paddingBottom: 0,
  },
});
