import React from 'react';
import { View, Text, StyleSheet,  TouchableOpacity, Image  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Profile from '../Components/Profile/Profile';

import RegistroGasto from '../Components/Forms/RegistroGasto';

const AgregarIngreso = ({navigation}) => {

    const handleButtonPressGuardar = () =>{
        navigation.navigate('Ingresos');
    }

    const handleButtonPressCancelar = () => {

    }

    const phrases = [
      "Antes de gastar, pregúntate si realmente lo necesitas.",
      "Cada gasto innecesario te aleja de tus metas financieras.",
      "Gastar con sabiduría te brinda tranquilidad financiera.",
      "Cada vez que evitas un gasto impulsivo, te acercas a tus sueños.",
      "Las pequeñas decisiones de ahorro suman grandes beneficios.",
      "El dinero gastado en cosas innecesarias es tiempo trabajado en vano.",
      "Tu futuro financiero vale más que un gasto momentáneo.",
      "Pausa antes de comprar y piensa si es realmente valioso.",
      "Invierte en experiencias, no solo en cosas materiales.",
      "El ahorro es una elección que te empodera.",
      "Controla tus gastos hoy para asegurarte un mañana mejor.",
      "Las recompensas del ahorro superan la gratificación instantánea.",
      "No dejes que los gastos impulsivos te roben la seguridad financiera.",
      "Cada vez que evitas un gasto innecesario, estás invirtiendo en tu futuro.",
      "Las mejores cosas de la vida no siempre cuestan dinero.",
      "El ahorro inteligente te permite disfrutar de lo que realmente importa.",
      "Prioriza tus necesidades sobre tus deseos para un futuro financiero sólido.",
      "Sé consciente de tus gastos para tomar decisiones financieras informadas.",
      "Toma el control de tus gastos y toma el control de tu futuro.",
      "El ahorro te da la libertad de elegir cómo gastar tu dinero.",
    ];
    
 
    const randomIndex = Math.floor(Math.random() * phrases.length);
    const randomPhrase = phrases[randomIndex];

  return (
    <SafeAreaView style={styles.container}>
      <Profile navigation={navigation} />


      <RegistroGasto />

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
    gap: 60,
    width : 300
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

