import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TaskItem = ({ title, des, time, priority, category }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.circle}></View>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.time}>{new Date(time).toLocaleString()}</Text>
        </View>
        <View style={styles.categoryContainer}>
          <View style={styles.category}>
            <Image style={styles.icon} source={require("../../../assets/images/piority.png")} />
            <Text style={styles.minitext}>{category}</Text>
          </View>
          <View style={styles.priority}>
            <Image style={styles.icon} source={require("../../../assets/images/flag.png")} />
            <Text style={styles.minitext}>{priority}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: "#363636",
    height: 80,
    padding: 10,
    alignSelf: 'center',
    marginVertical: 10,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white',
    marginRight: 20,
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1,
    gap: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'light',
    color: 'white',
  },
  time: {
    fontSize: 13,
    fontWeight: '200',
    color: 'white',
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    gap: 10, 
  },
  category: {
    width: 'auto',
    height: 30,
    backgroundColor: 'blue',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 4,
    gap: 3,
  },
  priority: {
    width: 45,
    height: 30,
    borderColor: 'white',
    borderWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 1,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: 'white',
  },
  minitext: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default TaskItem;
