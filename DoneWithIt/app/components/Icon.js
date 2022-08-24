import React from 'react';
import { View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function Icon({name,iconColor = '#fff',size = 40,backgroundColor = '#000'}) {
    return (
       <View style = {{
           width : size,
           height : size,
           backgroundColor,
           borderRadius : size/2,
           alignItems : "center",
           justifyContent : "center",

       }}>
    <MaterialCommunityIcons name = {name} size = {size * 0.5} color = {iconColor}/>
       </View>
    );
}

export default Icon;