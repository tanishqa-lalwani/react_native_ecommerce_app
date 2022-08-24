import React from 'react';
import { StyleSheet, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function ListItemDeleteAction({onPress}) {
    return (
        <TouchableWithoutFeedback onPress = {onPress}>
        <View style = {styles.container}>
            <MaterialCommunityIcons name = "trash-can" size = {35} color = "white" />
        </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container : {
        backgroundColor : "#ff5252",

        width : 70,
        justifyContent : 'center',
        alignItems : 'center'
    }
})

export default ListItemDeleteAction;