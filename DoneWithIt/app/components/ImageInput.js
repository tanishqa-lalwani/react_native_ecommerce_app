import React, { useEffect, useState } from 'react';
import {   Alert, Button, Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import {MaterialCommunityIcons} from '@expo/vector-icons'
function ImageInput({imageUri,onChangeImage}) {
  const permissions = async() => {
  const {granted} = await ImagePicker.requestCameraPermissionsAsync()
  if(!granted) alert('Allow Permissions');

  };
  useEffect(() => {
    permissions();
   }, [])

   const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
  };

  
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };
return (
    <TouchableWithoutFeedback onPress={handlePress}>
    <View style={styles.container}>
      {!imageUri && (
        <MaterialCommunityIcons
          color='#6e6969'
          name="camera"
          size={40}
        />
      )}
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
  </TouchableWithoutFeedback>
);
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: '#f8f4f4',
        borderRadius: 15,
        height: 100,
        justifyContent: "center",
        marginVertical: 10,
        overflow: "hidden",
        width: 100,
      },
      image: {
        height: "100%",
        width: "100%",
      },
})
export default ImageInput;