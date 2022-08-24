import React from 'react';
import {  Modal, StyleSheet, View } from 'react-native';
import * as Progress from 'react-native-progress';
//import color from '../../config/color';
import LottieView from 'lottie-react-native'

function UploadScreen({progress=0,visible = false,onDone}) {
return (
    <Modal visible = {visible}>
        <View style = {styles.container}>
        {
            progress < 1 ? (
    <Progress.Bar  progress = {progress} width = {200} />
            ):(
    <LottieView 
    autoPlay
    loop = {false}
    source = {require('../../../assets/animations/done.json')}
    onAnimationFinish={onDone}
    style = {styles.animation}
    />
    )}
    </View>
    </Modal>
);
}

const styles = StyleSheet.create({
    animation: {
      width: 150,
    },
    container: {
      alignItems: "center",
      flex: 1,
      justifyContent: "center",
    },
  });

export default UploadScreen;