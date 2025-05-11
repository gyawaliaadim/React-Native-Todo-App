import { useEffect, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GoalsInputs from "./components/GoalsInputs";

export default function Index() {
  const [modalVisible, setModalVisible] = useState(true);
  const [goals, setGoals] = useState([
    { text: "Learn React Native", key: "1746971684903" },
    { text: "Buy Groceries", key: "1746971684905" },
                            

  ]);

  const endModal = () => setModalVisible(false);
  const openModal = () => setModalVisible(true);
  const deleteHandler = (key: string) => {
    const newGoals = goals.filter((goal) => goal.key !== key);
    setGoals(newGoals);
  };
  const addGoalHandler = (enteredGoalText: string) => {
    setGoals((currGoals) => [
      ...currGoals,
      { text: enteredGoalText, key: Date.now().toString() },
    ]);
    endModal();
  };

  useEffect(() => {
    console.log("Goals updated:", goals);
  }, [goals]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={[styles.heading, styles.font]}>Your Todos:</Text>
        <ScrollView
          style={{ width: "100%", paddingHorizontal: 10 }}
        >
          {goals.map((goal) => (
            <Pressable
              key={goal.key}
              style={({ pressed }) => [
                styles.goalItem,
                pressed && styles.pressed
              ]}
              onPress={() => deleteHandler(goal.key)}
            >
              <Text style={styles.goalText}>{goal.text}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <Pressable style={styles.openGoalInputButton} onPress={openModal}>
          <Text style={styles.addGoalButtonText}>+</Text>
        </Pressable>

        <GoalsInputs
          visible={modalVisible}
          endModal={endModal}
          addGoalHandler={addGoalHandler}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  inner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
    paddingTop: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "sans",
    marginBottom: 20,
    color: "yellow",
  },
  openGoalInputButton: {
    backgroundColor: "yellow",
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    position: "absolute",
    bottom: 30,
    right: 20,
    zIndex: 1,
  },
  addGoalButtonText: {
    fontSize: 32,
    color: "black",
    fontWeight: "bold",
  },
  font: {
    fontFamily: "monospace",
  },
  goalItem: {
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 10,
    borderColor: "grey",
    borderWidth: 2,
    maxHeight: 40,
  },
  goalText: {
    width: "100%",
    height: "100%",
    padding: 10,
    color: "black",
  },
  pressed: {
    opacity: 0.75,
  },
});
