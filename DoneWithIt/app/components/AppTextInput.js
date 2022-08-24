import React from 'react';
import { Platform, StyleSheet, TextInput, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function AppTextInput({icon , ...otherprops,text}) {
    return (
        <View style = {styles.container}>
        {icon && <MaterialCommunityIcons name = {icon} size = {20} style = {styles.icon} />}

        <TextInput value = {text} style ={styles.textInput} {...otherprops} >
       </TextInput>
        </View>

       
    );
}
const styles = StyleSheet.create({
    container : {
        backgroundColor : "#f8f4f4",
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
        alignItems : "center"


    },
    textInput:{
        fontSize : 18,
        color : "#0c0c0c",
        fontFamily : Platform.OS === "android" ? "Roboto" : "Avenir",
        
    },
    icon : {
        color : "#6e6969",
        marginRight : 10
    }
})
export default AppTextInput;