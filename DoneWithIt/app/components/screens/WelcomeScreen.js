import React from 'react'
import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import AppButton from '../AppButton'
import AppText from '../AppText';

 function WelcomeScreen({navigation}) {
  return(
    <ImageBackground
    blurRadius = {2}
    style={styles.background}
    source={require("../../../assets/background.jpg")}
  >
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require("../../../assets/logo-red.png")} />
      <AppText style = {styles.tagline}>Sell What You Don't Need</AppText>
    </View>
    <View style = {styles.buttons}>
    <AppButton title = "login" onPress = {()=> navigation.navigate("Login")} color = "#fc5c65"/>
    <AppButton title = "Register" onPress = {()=> navigation.navigate("Register")} color = "#4ecdc4"/>

    </View>
    
  </ImageBackground>
  );

  
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent : "flex-end",
        alignItems : "center"      
    },
    logoContainer: {
      position: "absolute",
      top: 70,
      alignItems: "center",
    },
    logo : {
        width : 100,
        height : 100
    },
    buttons:{
      padding : 20,
      width : '100%'
    },
    tagline : {
      fontSize : 20,
      fontWeight : "600",
      paddingVertical : 10,
    }
    
})

export default WelcomeScreen;