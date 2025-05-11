// GoalsInputs.tsx
import React, { useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

interface GoalsInputsProps {
  visible: boolean;
  endModal: () => void;
  addGoalHandler: (text: string) => void;
}

const GoalsInputs: React.FC<GoalsInputsProps> = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };

  const onAddGoalHandler = () => {
    
    const trimmed = enteredGoalText.trim();
    if (!trimmed) return;
    if (trimmed?.length>100) return;
    props.addGoalHandler(trimmed);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          placeholderTextColor="grey"
          value={enteredGoalText}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <Pressable style={styles.button} onPress={onAddGoalHandler}>
            <Text style={styles.buttonText}>Add</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={props.endModal}>
            <Text style={styles.buttonText}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default GoalsInputs;

const styles = StyleSheet.create({
  buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  textInput: {
    backgroundColor: "white",
    borderColor: "yellow",
    width: 250,
    borderRadius: 12,
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    padding: 8,
  },
  button: {
    backgroundColor: "yellow",
    padding: 8,
    borderRadius: 12,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    padding: 16,
    gap: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 10,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    marginTop: 20,
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 16,
  },
});
