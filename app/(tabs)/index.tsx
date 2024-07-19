import { Image, StyleSheet, Platform, ScrollView, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro01 from '@/components/Screens/Intro01';
import Intro02 from '@/components/Screens/Intro02';
import Intro03 from '@/components/Screens/Intro03';
import Intro04 from '@/components/Screens/Intro04';
import Home from '@/components/Screens/Home'
import AddTask from '@/components/Screens/AddTask';
import Index from '@/components/Screens/Index';
const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen  options={{headerShown: false}} name="Intro01" component={Intro01} />
      <Stack.Screen  options={{headerShown: false}} name="Intro02" component={Intro02} />
      <Stack.Screen  options={{headerShown: false}} name="Intro03" component={Intro03} />
      <Stack.Screen  options={{headerShown: false}} name="Intro04" component={Intro04} />
      <Stack.Screen  options={{headerShown: false}} name="Home" component={Home} />
      <Stack.Screen  options={{headerShown: false}} name="Addtask" component={AddTask} />
      <Stack.Screen  options={{headerShown: false}} name="Index" component={Index} />

    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  
});
