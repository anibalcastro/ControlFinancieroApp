import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigation';
import { StatusBar } from 'expo-status-bar';



export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
      <StatusBar style='dark' />
    </NavigationContainer>
  );
}