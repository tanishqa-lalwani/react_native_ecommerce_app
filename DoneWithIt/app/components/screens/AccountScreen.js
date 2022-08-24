import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AuthContext from '../auth/context';
import store from '../auth/store';
import useAuth from '../auth/useAuth';
import { ErrorMessage } from '../forms';
import Icon from '../Icon';
import ListItem from '../ListItem';
import Screen from './Screen';

const menuItems = [
    {
        title : "My Listings",
        icon : {
            name : "format-list-bulleted",
            backgroundColor : "#fc5c65"
        }
    },
    {
        title : "My Messages",
        icon : {
            name : "email",
            backgroundColor : "#4ecdc4"
        }
    }
]
function AccountScreen(props) {
    const {user,logOut} = useAuth()
    
    return (
       <Screen style = {styles.screenContainer} >
           <View style = {styles.container} >
            <ListItem title = {user.name} listing ={user.email} image = {require("../../../assets/mosh.jpg")}/>
           </View>
           <View style = {styles.container}>
               <ErrorMessage  />
            <FlatList 
                data = {menuItems}
                keyExtractor = {(menuItem) => menuItem.title}
                renderItem = {({item}) => 
                <ListItem title = {item.title} 
                ImageComponent = { 
                    <Icon name = {item.icon.name } backgroundColor = {item.icon.backgroundColor} /> 
                }/>}
            />
           </View>
           <ListItem title = "Log Out" ImageComponent = {
               <Icon name = "logout" backgroundColor = "#ffe66d"/>
           }
           onPress = {() => logOut()}/>

       </Screen>
    );
}

const styles = StyleSheet.create({
    screenContainer : {
        backgroundColor : "#f8f4f4"
    },
    container : {
        marginVertical : 20,
    }
})
export default AccountScreen;