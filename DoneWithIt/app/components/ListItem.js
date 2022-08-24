import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import AppText from './AppText';
import { Swipeable } from 'react-native-gesture-handler';
import {MaterialCommunityIcons} from '@expo/vector-icons'


function ListItem({image,title,listing,onPress,renderRightActions,ImageComponent}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        
        <TouchableHighlight underlayColor = {'#f8f4f4'} onPress = {onPress}>

        <View style = {styles.container}>
            {ImageComponent}
           {image && <Image style = {styles.image} source = {image}/>}
            <View style = {styles.detailsContainer}>
                <AppText style = {styles.title} numberOfLines = {1}>{title}</AppText>
            { listing &&   <AppText style = {styles.subtitle} numberOfLines = {2}>{listing}</AppText>}
            </View>
            <MaterialCommunityIcons name = "chevron-right" color = "#6e6969" size = {25}/>
        </View>
        </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        padding : 15,
        backgroundColor : "#fff",
        alignItems : "center"
    },
    image:{
        width : 70,
        height : 70,
        borderRadius : 35,
    },
    title : {
        fontWeight : "600",
      

    },
    detailsContainer:{
        marginLeft : 10,
        justifyContent : "center",
        flex : 1,
    },
    subtitle : {
        color : '#6e6969'
    }


})
export default ListItem;