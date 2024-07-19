import {
  View,
  Button,
  Platform,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation } from '@react-navigation/native'
const AddTask = () => {
  const priorityList = Array.from({ length: 12 }, (_, i) => i + 1);
  const navigation = useNavigation();
  const categoryList = [
    "Design",
    "University",
    "Social",
    "Music",
    "Heart",
    "Movie",
    "Home",
    "Hobbies",
    "Add New",
  ];
  const [newTask, setNewTask] = useState("");
  const [des, setNewDes] = useState("");
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [showPriority, setShowPriority] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showCategory, setShowCategory] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };
  const handlePrioritySelect = (number) => {
    setSelectedPriority(number);
  };
  const handleCategorySelect = (index) => {
    setSelectedCategory(index);
  };
  const storeTask = async (taskInfo) => {
    try {
      const storedTasks = await AsyncStorage.getItem('tasks');
      const tasks = storedTasks ? JSON.parse(storedTasks) : [];
      tasks.push(taskInfo);
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
      console.log('Task successfully stored in AsyncStorage!');
    } catch (err) {
      console.error('Error storing task in AsyncStorage:', err);
    }
  };
  
  const handleSubmit = () => {
    const taskInfo = {
      title: newTask,
      des: des,
      time: date.toISOString(),
      priority: selectedPriority,
      category: selectedCategory
    };
    storeTask(taskInfo);
    navigation.navigate("Index");
  };
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1, paddingBottom: 300 }}>
        <Text style={styles.content}>Add Task</Text>
        <TextInput
          style={styles.input}
          value={newTask}
          onChangeText={(value) => {
            setNewTask(value);
          }}
        />
        <Text style={styles.content}>Description</Text>
        <TextInput
          style={styles.input}
          value={des}
          onChangeText={(value) => {
            setNewDes(value);
          }}
        />
        <Text style={styles.content}>Date</Text>
        <View style={styles.dateTimeContainer}>
          <View style={styles.buttonContainer}>
            <Button onPress={showDatepicker} title="Date picker!" />
          </View>
          <Text style={styles.text}>
            Selected Date: {date.toLocaleDateString()}
          </Text>
        </View>
        <Text style={styles.content}>Time</Text>
        <View style={styles.dateTimeContainer}>
          <View style={styles.buttonContainer}>
            <Button onPress={showTimepicker} title="Time picker!" />
          </View>
          <Text style={styles.text}>
            Selected Time:{" "}
            {date.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <Text style={styles.content}>Task Priority</Text>
        <View style={{ flexDirection: "row", gap: 20 }}>
          <TouchableWithoutFeedback
            onPress={() => {
              setShowPriority(!showPriority);
            }}
          >
            <Image
              style={styles.icon}
              source={require("../../assets/images/piority.png")}
            ></Image>
          </TouchableWithoutFeedback>
          <Text style={styles.content}>
            Piority Of Task is :
            {selectedPriority === null ? "" : selectedPriority}
          </Text>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showPriority}
          onRequestClose={() => setShowPriority(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalView}>
              <Text style={styles.content}>Task Priority</Text>
              <View style={styles.line}></View>
              <View style={styles.priorityContainer}>
                {priorityList.map((number) => (
                  <TouchableOpacity
                    key={number}
                    style={[
                      styles.priorityItem,
                      selectedPriority === number && styles.selectedPriority,
                    ]}
                    onPress={() => handlePrioritySelect(number)}
                  >
                    <Image
                      style={styles.priorityImage}
                      source={require("../../assets/images/shortflag.png")}
                    />
                    <Text style={styles.priorityNumber}>{number}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.buttonContainer2}>
                <Button title="Close" onPress={() => setShowPriority(false)} />
                <Button title="Choose" onPress={() => setShowPriority(false)} />
              </View>
            </View>
          </View>
        </Modal>
        <Text style={styles.content}>Category</Text>
        <Button
          title="Choose Category"
          onPress={() => {
            setShowCategory(true);
          }}
        ></Button>
        <Text style={styles.content}>
          Category Of Task is :{selectedCategory === "" ? "" : selectedCategory}
        </Text>
        <Button onPress={handleSubmit} title="Done"></Button>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showCategory}
          onRequestClose={() => setShowCategory(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalView}>
              <Text style={styles.content}>Category</Text>
              <View style={styles.line}></View>
              <View style={styles.priorityContainer}>
                {categoryList.map((index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.categoryItem,
                      selectedCategory === index && styles.selectedPriority,
                    ]}
                    onPress={() => handleCategorySelect(index)}
                  >
                    <Image
                      style={styles.priorityImage}
                      source={require("../../assets/images/shortflag.png")}
                    />
                    <Text style={styles.priorityNumber}>{index}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.buttonContainer2}>
                <Button title="Close" onPress={() => setShowCategory(false)} />
                <Button title="Choose" onPress={() => setShowCategory(false)} />
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#363636",
    paddingHorizontal: "10%",
    paddingTop: 10,
  },
  content: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 2,
    borderColor: "white",
    alignSelf: "center",
    fontSize: 18,
    color: "white",
    paddingLeft: 10,
    marginVertical: 5,
  },
  dateTimeContainer: {
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  icon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    tintColor: "white",
    marginBottom: 10,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: "80%",
    backgroundColor: "#979797",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    height: 380,
  },
  modalText: {
    fontSize: 18,
    color: "black",
    marginBottom: 10,
  },
  line: {
    width: "90%",
    borderWidth: 1,
    alignSelf: "center",
    borderColor: "white",
    marginBottom: 20,
  },
  priorityContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },
  priorityItem: {
    alignItems: "center",
    width: "22%",
    marginBottom: 10,
    backgroundColor: "#272727",
    padding: 5,
  },
  categoryItem: {
    alignItems: "center",
    width: "30%",
    marginBottom: 10,
    backgroundColor: "#272727",
    padding: 5,
  },
  selectedPriority: {
    backgroundColor: "blue",
  },
  priorityImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    tintColor: "white",
  },
  priorityNumber: {
    fontSize: 15,
    color: "white",
    marginTop: 5,
  },
  buttonContainer2: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
});

export default AddTask;
