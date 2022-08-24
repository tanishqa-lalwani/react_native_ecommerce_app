import React from 'react';
import { StyleSheet,Text,TouchableOpacity} from 'react-native';
import AppText from './AppText';

export default function AppButton({title,color = "#fc5c65",onPress}) {
  return (
 
    <TouchableOpacity style = {[styles.background, {backgroundColor : color}]} onPress = {onPress}>
      <AppText style = {styles.text}>{title}</AppText>
    </TouchableOpacity>
  
    
  );
}

const styles = StyleSheet.create({
  background:{
   backgroundColor:"#fc5c65",
   width : '100%',
   borderRadius : 25,
   justifyContent : "center",
   alignItems : "center",
   padding : 15,
   marginVertical : 10
   

  },
  text :{
    fontSize :18,
    fontWeight : "600",
    textTransform : "capitalize",
    color : "white",
    textAlign : "center"
  }
});
