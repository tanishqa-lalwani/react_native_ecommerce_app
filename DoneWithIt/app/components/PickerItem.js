import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import AppText from './AppText';

function PickerItem({item,onPress}) {
    return (
        <TouchableOpacity onPress = {onPress} >
           <AppText style = {styles.screen}>{item.label}</AppText> 
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    screen : {
        padding : 20,
    }
})
export default PickerItem;