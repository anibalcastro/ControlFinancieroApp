import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/Views/Login';
import HomeScreen from './src/Views/Home'; 
import IngresosScreen from './src/Views/Ingresos';
import GastosScreen from './src/Views/Gastos';
import AgregarIngresoScreen from './src/Views/AgregarIngreso';
import AgregarGastoScreen from './src/Views/AgregarGasto';
import ActualizarPerfilScreen from './src/Views/Perfil';


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}> 
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Ingresos' component={IngresosScreen} />
      <Stack.Screen name='Gastos' component={GastosScreen} />
      <Stack.Screen name='AgregarIngreso' component={AgregarIngresoScreen} />
      <Stack.Screen name='AgregarGasto' component={AgregarGastoScreen} />
      <Stack.Screen name='Perfil' component={ActualizarPerfilScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
