import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Adminnistrador from './screens/Adminnistrador';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Alvenaria_srPacoca" component={HomeScreen} />
        <Stack.Screen name="Produto" component={ProductScreen} />
        <Stack.Screen name="Admin" component={Adminnistrador} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}