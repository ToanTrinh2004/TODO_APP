import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Calendar from '@/components/Screens/Calendar';
import Profile from '@/components/Screens/Profile';
import Focus from '@/components/Screens/Focus';
import Navbar from '../ScreenComponents/Home/Navbar';
import AddTask from '@/components/Screens/AddTask';
import Index from '@/components/Screens/Index'
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      initialRouteName="Navbar"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarStyle: { position: 'absolute', height: 70, backgroundColor: '#363636',paddingBottom:5 },
      }}
    >
      <Tab.Screen
        name="Index"
        component={Index}
        options={{
          tabBarLabel: 'Index',
          tabBarLabelStyle: {
            fontWeight: '400',
            color: 'white',
            position: 'absolute',
            marginTop: -15,
            fontSize: 13,
          },
          tabBarIcon: ({ color, size }) => (
            <Image
              style={styles.icon}
              source={require('../../assets/images/home.png')}
            />
          ),
          headerShown: false,
          tabBarBadgeStyle: { color: 'yellow' },
        }}
      />
      <Tab.Screen
        name="Calenda"
        component={Calendar}
        options={{
          tabBarLabel: 'Calendar',
          tabBarLabelStyle: {
            fontWeight: '400',
            color: 'white',
            position: 'absolute',
            marginTop: -15,
            fontSize: 13,
          },
          tabBarIcon: ({ color, size }) => (
            <Image
              style={styles.icon}
              source={require('../../assets/images/calendar.png')}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddTask}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Image
              style={{ width: 60, height: 60 }}
              source={require('../../assets/images/add.png')}
            />
          ),
          headerShown: false,
          tabBarIconStyle: {
            marginBottom: 50,
          },
        }}
      />
       <Tab.Screen
        name="Focus"
        component={Focus}
        options={{
          tabBarLabel: 'Focus',
          tabBarLabelStyle: {
            fontWeight: '400',
            color: 'white',
            position: 'absolute',
            marginTop: -15,
            fontSize: 13,
          },
          tabBarIcon: ({ color, size }) => (
            <Image
              style={styles.icon}
              source={require('../../assets/images/focus.png')}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarLabelStyle: {
            fontWeight: '400',
            color: 'white',
            position: 'absolute',
            marginTop: -15,
            fontSize: 13,
          },
          tabBarIcon: ({ color, size }) => (
            <Image
              style={styles.icon}
              source={require('../../assets/images/user.png')}
            />
          ),
          headerShown: false,
        }}
      />
     
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: '5%',
    alignItems: 'center',
  },
  icon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    tintColor:'white',
    marginBottom:10
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
});

export default Home;
