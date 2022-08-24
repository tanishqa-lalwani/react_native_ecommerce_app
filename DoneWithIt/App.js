


import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {  Button, Image,  StyleSheet, Text, View } from 'react-native';

import ListingEditScreen from './app/components/screens/ListingEditScreen';
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import Screen from './app/components/screens/Screen';
import ListingScreen from './app/components/screens/ListingScreen';
import AuthNavigator from './app/components/navigation/AuthNavigator';
import FeedNavigator from './app/components/navigation/FeedNavigator';
import navigationTheme from './app/components/navigation/navigationTheme';
import NavigatorComponent from './app/components/navigation/NavigatorComponent'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from './app/components/auth/context';
import authStorage from './app/components/auth/store'
import AppLoading from 'expo-app-loading';
import { navigationRef } from './app/components/navigation/rootNavigation';
import AppButton from './app/components/AppButton';
import * as Notifications from 'expo-notifications'
export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} onError = {console.warn} />
    );
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

    // const showNotification = () => {
    //   Notifications.scheduleNotificationAsync({
    //     content : {
    //     title : 'Congratulations',
    //     body : 'Your order has been successfully placed',
        
    //   },
    //   trigger : {
    //     seconds : 5
    //   }
     
    // });
    // };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {/* <OfflineNotice /> */}
      <NavigationContainer ref = {navigationRef} theme={navigationTheme}>
        {user ? <NavigatorComponent /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
    // <Screen>
    //   <AppButton title = "Click " onPress = {showNotification}></AppButton>
    // </Screen>
  );

}


