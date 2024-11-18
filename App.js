import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './pages/LoginPage';
import ForgotPassword from './pages/ForgotPassword';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import ConfirmationPage from './pages/ConfirmationPage';
import ConfirmationPassword from './pages/ConfirmationPassword';

// Crie um stack navigator
const Stack = createNativeStackNavigator();

// Componente principal do aplicativo
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "LoginPage" screenOptions={{headerShown: false}}>
        <Stack.Screen name= "LoginPage" component={LoginPage} screenOptions={{headerShown: false}}/>
        <Stack.Screen name= "MainPage" component={MainPage}/>
        <Stack.Screen name= "ForgotPassword" component={ForgotPassword}/>
        <Stack.Screen name= "RegisterPage" component={RegisterPage}/>
        <Stack.Screen name= "ConfirmationPage" component={ConfirmationPage}/>
        <Stack.Screen name= "ConfirmationPassword" component={ConfirmationPassword}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
