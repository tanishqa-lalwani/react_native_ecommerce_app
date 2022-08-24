import React from 'react';
import {  StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import AppText from './AppText';
import ListItem from './ListItem';
import {Image} from 'react-native-expo-image-cache'

function Card({title,imageUrl ,subtitle,onPress,thumbnailUrl}) {
    const ur1 = imageUrl.substring(8);
    const ur2 = ur1.split(".jpg"); 
    const imageUrl_final = "http://" + ur2[0] + ".jpg"
  //  const url = 'http://' + imageUrl + '.jpg'
    console.log(ur2)
    

    return (
        <TouchableWithoutFeedback onPress = {onPress}>
       <View style = {styles.background} >
            <Image tint = "light" preview = {{uri : thumbnailUrl}} style = {styles.image} uri = {imageUrl}/>

                <View style = {styles.details}>

                    <AppText style = {{marginBottom : 7}} numberOfLines={1}> {title}</AppText>
                    <AppText style = {{color : '#4ecdc4', fontWeight : "bold"}} numberOfLines={2} >{subtitle}</AppText>
                </View>
       </View>
       </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    background:{
        backgroundColor : "white",
        borderRadius : 15,
       marginBottom : 20,
       overflow : "scroll"

    },
    image :{
        width : '100%',
        height : 200,
      },
    details : {
        padding : 20
    },
  
})

export default Card;