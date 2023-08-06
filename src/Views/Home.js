import React from 'react';
import { View, Text, StyleSheet,  TouchableOpacity, Image  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Tarjeta from '../Components/Cards/Tarjetas';


const HomeScreen = ({navigation}) => {

    const handleButtonPressIngresos = () =>{
        navigation.navigate('Ingresos');
    }

    const handleButtonPressGastos = () => {
        navigation.navigate('Gastos');
    }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Bienvenido!</Text>
      <Text style={styles.texto}>Te recordamos registrar todos los ingresos y gastos, para llevar un mejor control.</Text>

      <Tarjeta titulo='INGRESOS' monto="$1000" color="green"/>
      <Tarjeta titulo='GASTOS' monto="$500" color="red"/>
      <Tarjeta titulo='SALDO TOTAL' monto="$500" color="#249DD1"/>

    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={handleButtonPressIngresos}>
        <Image source={require('../Images/Ingresos.png')} style={styles.imagenIngresos} />
        <Text style={styles.buttonTextIngreso}>Ingresos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleButtonPressGastos}>
        <Image source={require('../Images/Gastos.png')} style={styles.imagenIngresos} />
        <Text style={styles.buttonTextIngreso}>Gastos</Text>
      </TouchableOpacity>
    </View>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  texto : {
    fontSize: 15,
    marginLeft: 30,
    marginRight: 30,
    textAlign : 'center',
    marginBottom: 20,
  },
  imagenIngresos: {
    height: 100,
    width: 100,
  },
  buttonTextIngreso : {
    textAlign: "center",
    fontSize: 20,
  },
  buttonContainer : {
    marginTop: 20,
    flexDirection: 'row', // Alinea los botones en fila
    justifyContent: 'center', // Alinea los botones en el centro horizontal
    marginBottom: 10,
    gap: 60
  },

});

export default HomeScreen;

