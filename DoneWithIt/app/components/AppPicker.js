import React, { useState } from 'react';
import { Button, Modal, Platform, StyleSheet,  View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppText from './AppText';
import { FlatList, TouchableWithoutFeedback } from 'react-native';
import Screen from './screens/Screen';
import PickerItem from './PickerItem';

function AppPicker({icon ,placeholder,items,selectedItem,onSelectItem,PickerItemComponent = PickerItem,numberOfColumns = 1}) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
        <TouchableWithoutFeedback onPress = {()=> setModalVisible(true)}>
        <View style = {styles.container}>
        {icon && <MaterialCommunityIcons name = {icon} size = {20} style = {styles.icon} />}

        {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.textInput}>{placeholder}</AppText>
          )}         
        <MaterialCommunityIcons name = "chevron-down" size = {20} color = "#6e6969" />
        </View>
        </TouchableWithoutFeedback>
        <Modal visible = {modalVisible} animationType = "slide">
            <Screen>
            <Button title = "Close"  onPress ={()=>setModalVisible(false)}/>
            <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns = {numberOfColumns}

            renderItem={({ item }) => (
              <PickerItemComponent
              item = {item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                  //console.log(item)
                }}
              />
            )}
          />            
          </Screen>
        </Modal>
        </>

       
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


    },
    textInput:{
        fontSize : 18,
        color : "#0c0c0c",
        fontFamily : Platform.OS === "android" ? "Roboto" : "Avenir",
        flex : 1  
        
    },
    icon : {
        marginRight : 10
    },
    text:{
        flex : 1
    }
})
export default AppPicker;