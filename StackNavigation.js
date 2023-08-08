import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/Views/Login';
import HomeScreen from './src/Views/Home'; 
import IngresosScreen from './src/Views/Ingresos';
import GastosScreen from './src/Views/Gastos';
import AgregarIngreso from './src/Views/AgregarIngreso';
import AgregarGasto from './src/Views/AgregarGasto';


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}> 
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Ingresos' component={IngresosScreen} />
      <Stack.Screen name='Gastos' component={GastosScreen} />
      <Stack.Screen name='AgregarIngreso' component={AgregarIngreso} />
      <Stack.Screen name='AgregarGasto' component={AgregarGasto} />
    </Stack.Navigator>
  );
};

export default StackNavigator;