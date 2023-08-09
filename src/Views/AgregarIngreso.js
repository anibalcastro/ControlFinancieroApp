import React, { useState } from 'react';
import { View, Text, StyleSheet,  TouchableOpacity, Image  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Profile from '../Components/Profile/Profile';

import RegistroIngreso from '../Components/Forms/RegistroIngreso';

const AgregarIngreso = ({navigation}) => {

    const handleButtonPressGuardar = () =>{
        navigation.navigate('Ingresos');
    }

    const handleButtonPressCancelar = () => {

    }

    const phrases = [
      "Cada pequeño ahorro te acerca más a tus grandes metas financieras.",
      "El ahorro es el camino hacia la libertad financiera.",
      "Ahorra hoy para disfrutar de un futuro más seguro y sin preocupaciones.",
      "Cada moneda que ahorras es un paso hacia un mejor mañana.",
      "Invierte en tu futuro al ahorrar en el presente.",
      "Tu determinación de ahorrar te llevará a alcanzar tus sueños.",
      "Los pequeños ahorros constantes suman grandes logros financieros.",
      "Cada decisión de ahorro es un voto por tu independencia financiera.",
      "El ahorro es la llave que abre las puertas de las oportunidades.",
      "No ahorres lo que te sobra, sobra lo que ahorras.",
      "Cada dólar ahorrado es un paso más cerca de tus aspiraciones.",
      "Tus ahorros son un reflejo de tu compromiso con un futuro mejor.",
      "Ahorra con propósito, gasta con consciencia.",
      "Cuida tus centavos y tus dólares se cuidarán a sí mismos.",
      "El ahorro inteligente te da el poder de elegir cómo vivir tu vida.",
      "Los sacrificios de hoy son los logros financieros de mañana.",
      "Ahorra con entusiasmo y observa cómo tus metas se hacen realidad.",
      "Ahorra como si estuvieras construyendo tu propio camino hacia el éxito.",
      "Cada vez que ahorras, estás creando un camino hacia la tranquilidad financiera.",
      "El ahorro es el ingrediente secreto para una vida financiera satisfactoria."
    ];
  

    const randomIndex = Math.floor(Math.random() * phrases.length);
    const randomPhrase = phrases[randomIndex];

  return (
    <SafeAreaView style={styles.container}>
      <Profile navigation={navigation}/>

      <RegistroIngreso />

      <View style={styles.containerPhrase}>
      <Text style={styles.phrase}>{randomPhrase}</Text>
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
  containerPhrase: {
    marginBottom: 55,
    marginLeft: 25,
    marginRight: 25,
  },
  phrase: {
    textAlign: "center",
    fontSize: 20
  }

});

export default AgregarIngreso;

