
import React, { useEffect } from 'react';
import {  StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import ListingScreen from '../screens/ListingScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import Icon from '../Icon';
import AccountScreen from '../screens/AccountScreen';
import FeedNavigator from './FeedNavigator';
import color from '../../config/color';
import NewListingButton from './NewListingButton';

import navigationRoute from './rootNavigation';
import useNotification from '../hooks/useNotification';




  const Tab = createBottomTabNavigator();

  
  const NavigatorComponent = () => {

    useNotification()
  
    return(
    

  

    <Tab.Navigator
    
    >
      <Tab.Screen name = "Feed" component = {FeedNavigator}
      options = {{
        tabBarIcon : ({size,color}) => <MaterialCommunityIcons name = "home" size = {size} color = {color}/> 
      }}/>
      <Tab.Screen name = "ListingEdit"  component = {ListingEditScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate("ListingEdit")}
          />
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        ),
      })}
      />
      <Tab.Screen name = "Account" component = {AccountScreen}
       options = {{
        tabBarIcon : ({size,color}) => <MaterialCommunityIcons name = "account" size = {size} color = {color}/> 
      }}/>
      
  
    </Tab.Navigator>
  );
  };
  

export default NavigatorComponent ;