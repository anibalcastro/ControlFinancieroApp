import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Tarjeta from '../Components/Cards/Tarjetas';
import Tabla from '../Components/Table/Tabla';
import Profile from '../Components/Profile/Profile';


const Ingresos = ({ navigation }) => {

    const handleButtonPress = () => {
        navigation.navigate('AgregarIngreso');
    }

    const encabezados = ["Titulo", "Categoria", "Monto"]

    const data = [
        ['Salario', 'Salario', '$10.00'],
        ['Salario', 'Salario', '$10.00'],
        ['Salario', 'Salario', '$10.00'],
        ['Salario', 'Salario', '$10.00'],
        ['Comisión', 'Ingreso Extra', '$10.00'],
        ['10% Pago', 'Ahorros', '$10.00'],
        ['10% Pago', 'Ahorros', '$10.00'],
 
    ];


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerProfile}>
                <Profile navigation={navigation}/>
            </View>

                <Tarjeta titulo='TOTAL DE INGRESOS' monto="$1000" color="green" />

                <View style={styles.divider} />

                <Text style={styles.ingresos}>INGRESOS REGISTRADOS</Text>

                <Tabla encabezado={encabezados} data={data} color={"#77cc77"} />

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
        backgroundColor: 'green',
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

export default Ingresos;

