import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Tarjeta from '../Components/Cards/Tarjetas';
import Tabla from '../Components/Table/Tabla';
import Profile from '../Components/Profile/Profile';


const Gasto = ({ navigation }) => {

    const handleButtonPress = () => {
        navigation.navigate("AgregarGasto")
    }

    const encabezados = ["Titulo", "Categoria", "Monto", "Fecha"]

    const data = [
        ['Gasto de telefono', 'Servicios', '$10.00', "05/08/23"],
        ['Pago Luz', 'Servicios', '$10.00', "05/08/23" ],
        ['Salario', 'Salario', '$10.00', "05/08/23" ],
       
    ];


    return (
        <SafeAreaView style={styles.container}>
                <View style={styles.containerProfile}>
                <Profile  navigation={navigation}/>
                </View>

                <Tarjeta titulo='TOTAL DE GASTOS' monto="$500" color="red" />

                <View style={styles.divider} />

                <Text style={styles.ingresos}>GASTOS REGISTRADOS</Text>

                <Tabla encabezado={encabezados} data={data} color={"#ff9999"} />

                <TouchableOpacity style={styles.floatingButton} onPress={handleButtonPress}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
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
        marginTop: 20,
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    ingresos: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    texto: {
        fontSize: 15,
        marginLeft: 30,
        marginRight: 30,
        textAlign: 'center',
        marginBottom: 20,
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 10,
        marginTop: 10,
        width: "100%"
    },
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'red',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4, // Sombras en Android
    },
    buttonText: {
        color: 'white',
        fontSize: 24,
    },
    containerProfile : {
        marginBottom: 10
    }


});

export default Gasto;

