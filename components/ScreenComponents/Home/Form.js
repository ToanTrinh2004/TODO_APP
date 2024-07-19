import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors'
import { useNavigation } from '@react-navigation/native'

const Form = () => {
    const [status,setStatus] = useState(false);
  return (
    <View style={styles.container} >
         {status ? <View>
</View> : 
<View>
<Image style={[styles.logo]} source={require("../../../assets/images/CheckList.png")}></Image>
<Text style={styles.text}>What do you want to do today?</Text>
<Text style={styles.text}>Tap + to add your tasks</Text>
</View>}
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent:'center',
    marginVertical:'20%'
  },
  logo:{
    resizeMode:'contain'
  },
  text:{
    fontSize:20,
    fontWeight:'600',
    color:'white',
    alignSelf:'center'
  },
});

export default Form