import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useNavigation } from '@react-navigation/native'

const Intro01 = () => {
    const navigation = useNavigation();
    const handlePress=()=>{
        navigation.navigate("Intro02")
    }
  return (
    <View style={styles.container} >
        <TouchableOpacity onPress={handlePress}>
      <Image source={require('../../assets/images/Logo.png')}></Image>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'black',
    alignItems:'center',
    justifyContent:'center'
  },
  logo:{
    width:'33%',
    height: '20%',
    resizeMode:'contain'
  }
});

export default Intro01