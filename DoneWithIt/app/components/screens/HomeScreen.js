import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"

 function HomeScreen() {
     return(
    <View style ={styles.background}>
    <View style={styles.close}>
        <MaterialCommunityIcons name = "close" color = "white" size = {35} />
    </View>
      
    
    <View style={styles.delete}>
    <MaterialCommunityIcons name = "trash-can-outline" color = "white" size = {35} />

    </View>  
  <Image resizeMode = "contain" source = {require("../../../assets/chair.jpg")} style = {{
      width : '100%',
      height : '100%',
      top : 40,
      
     }}/>
 
    </View>

     );
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:"black",
        flex:1,
       },
    close : {
        
        position : "absolute",
        top: 20,
        left: 30,
    },
    delete :{
        position : "absolute",
        right : 30,
        top : 20,
    }
    
})
export default HomeScreen;