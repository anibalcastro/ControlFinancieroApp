import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Tarjeta from '../Components/Cards/Tarjetas';
import Tabla from '../Components/Table/Tabla';


const Gasto = ({ navigation }) => {

    const handleButtonPress = () => {
        
    }

    const encabezados = ["Titulo", "Categoria", "Monto", "Fecha"]

    const data = [
        ['Gasto de telefono', 'Servicios', '$10.00', "05/08/23"],
        ['Pago Luz', 'Servicios', '$10.00', "05/08/23" ],
        ['Salario', 'Salario', '$10.00', "05/08/23" ],
       
    ];


    return (
        <SafeAreaView style={styles.container}>
                <Text style={styles.heading}>Gastos</Text>
                <Text style={styles.texto}>En esta sección podrás encontrar el monto total de gastos mensuales, y podes observar tus ultimas transacciones.</Text>

                <Tarjeta titulo='GASTOS' monto="$500" color="red" />

                <View style={styles.divider} />

                <Text style={styles.ingresos}>Gastos registrados</Text>

                <Tabla encabezado={encabezados} data={data} />

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


});

export default Gasto;

