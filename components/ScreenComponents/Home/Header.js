import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
  
  return (
    <View style={styles.container} >
        <Image style={[styles.icon,{tintColor:'white'}]} source={require("../../../assets/images/sort.png")}></Image>
        <Text style={styles.text}>Home</Text>
        <Image style={styles.icon} source={require("../../../assets/images/profile.png")}></Image>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between',
    padding:'5%',
    alignItems:'center'
  },
  icon:{
    width:40,
    height:40,
    resizeMode:'contain'
  },
  text:{
    fontSize:20,
    fontWeight:'600',
    color:'white'
  },
});

export default Header