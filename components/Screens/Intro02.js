import { View, Text, StyleSheet,Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const Intro02 = () => {
  const navigation = useNavigation();
    const handlePress=()=>{
        navigation.navigate("Intro03")
    }
    const handleBack = () =>{
      navigation.navigate("Intro01")
    }
  return (
    <View style={styles.container}>
      <Text style={styles.skip}>Skip</Text>
      <View style={styles.middle}>
      <Image style={styles.illus_img} source={require("../../assets/images/intro1.png")}></Image>
      <Image style={styles.nav_img} source={require("../../assets/images/nav1.png")}></Image>
      
      <Text style={styles.main_text}>Manage Your Tasks</Text>
      <Text style={styles.skip}>You can easily manage all of your daily</Text>
      <Text style={styles.skip}>tasks in DoMe for free</Text>
    
      
      </View>
      <View style={styles.button_field}>
      <TouchableOpacity>
        <Button
        title="Back"
        color="black"
        onPress={handleBack}>
        </Button>
      </TouchableOpacity>
      <TouchableOpacity >
        <Button
        title="Next"
        onPress={handlePress}>
        </Button>
      </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: 'black',
      padding: '5%'
    },
    illus_img:{
      width:'60%',
      maxWidth:'80%',
      maxHeight:'50%',
      height: '40%',
      resizeMode:'contain',
    },
    nav_img:{
      width:100,
      height:4,
      marginVertical:'10%'
    },
    skip:{
        fontSize:16,
        color:'#ffffff'
    },
    main_text:{
        fontSize:26,
        color:'#ffffff',
        marginBottom:'10%'
    },
    middle:{
        alignItems:'center',
        flex:1
    },
    button_field:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:'15%'
    },

  });

export default Intro02