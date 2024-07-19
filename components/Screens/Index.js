import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../ScreenComponents/Home/Header';
import TaskItem from '../ScreenComponents/Home/TaskItem';
import { ScrollView } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';

const Index = () => {
    const [tasks, setTasks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const isFocused = useIsFocused();

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('tasks');
                setTasks(jsonValue != null ? JSON.parse(jsonValue) : []);
            } catch (e) {
                console.error('Error fetching tasks from AsyncStorage:', e);
            }
        };

        if (isFocused) {
            fetchTasks();
        }
    }, [isFocused]);

    // Filter tasks based on the search term
    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.des.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <TextInput
                style={styles.searchbar}
                placeholder="Search tasks"
                placeholderTextColor="grey"
                value={searchTerm}
                onChangeText={text => setSearchTerm(text)}
            />
            <Image style={styles.search_icon} source={require("../../assets/images/search.png")} />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {filteredTasks.map((task, index) => (
                    <TaskItem
                        key={index}
                        title={task.title}
                        des={task.des}
                        time={task.time}
                        priority={task.priority}
                        category={task.category}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: '5%',
    },
    searchbar: {
        width: '90%',
        height: 50,
        borderWidth: 2,
        borderColor: 'white',
        alignSelf: 'center',
        fontSize: 20,
        paddingLeft: 50,
        color: 'white',
        marginTop: 20,
    },
    search_icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        tintColor: 'white',
        position: 'absolute',
        marginTop: 103,
        marginLeft: 45,
    },
    scrollViewContent: {
        paddingBottom: 100, 
    },
});

export default Index;
