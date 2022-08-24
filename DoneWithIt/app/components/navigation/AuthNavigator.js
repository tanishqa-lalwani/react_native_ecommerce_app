import React from 'react'
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen'
import { createStackNavigator } from '@react-navigation/stack';







const Stack = createStackNavigator();
  const AuthNavigator = () => (
    <Stack.Navigator>
    <Stack.Screen name = "Welcome" component = {WelcomeScreen} options = {{headerShown : false}} />
    <Stack.Screen name = "Login" component = {LoginScreen}/>
    <Stack.Screen name = "Register" component = {RegisterScreen} />

    </Stack.Navigator>
  )

  export default AuthNavigator;