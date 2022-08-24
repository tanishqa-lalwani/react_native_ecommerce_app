import React from 'react';
import {  StyleSheet, TouchableOpacity, View } from 'react-native';
import color from '../../config/color';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function NewListingButton({ onPress }) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            name="plus-circle"
            color={color.white}
            size={40}
          />
        </View>
      </TouchableOpacity>
    );
  }

const styles = StyleSheet.create({
container : {
    alignItems: "center",
    backgroundColor: color.primary,
    borderColor: color.white,
    borderRadius: 40,
    borderWidth: 10,
    bottom: 20,
    height: 80,
    justifyContent: "center",
    width: 80,

}
})
export default NewListingButton;