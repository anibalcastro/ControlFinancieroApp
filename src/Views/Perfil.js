import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const ActualizarPerfil = ({ navigation }) => {
    const [nombreCompleto, setNombreCompleto] = useState('');
    const [cedula, setCedula] = useState('');
    const [telefono, setTelefono] = useState('');
    const [genero, setGenero] = useState('');
    const [email, setEmail] = useState('');
    const [nacionalidad, setNacioalidad] = useState('');

    useEffect(() => {
        setNombreCompleto("Anibal Castro Ponce");
        setCedula("208110305");
        setTelefono("+506 85424471");
        setGenero("Masculino");
        setEmail("anibaljafethcastro@gmail.com");
        setNacioalidad("Costa Rica")
    }, [])

    const handleActualizarPerfil = () => {

    }

    const handleEliminarPerfil = () =>{

    }
    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../Images/Profile.png')}
                style={styles.logo}
            />

            <TextInput
                placeholder="Nombre Completo"
                onChangeText={setNombreCompleto}
                value={nombreCompleto}
                style={styles.input}
            />
            <TextInput
                placeholder="Cédula"
                onChangeText={setCedula}
                value={cedula}
                style={styles.input}
            />
            <TextInput
                placeholder="Teléfono"
                onChangeText={setTelefono}
                value={telefono}
                style={styles.input}
            />
            <TextInput
                placeholder="Género"
                onChangeText={setGenero}
                value={genero}
                style={styles.input}
            />
            <TextInput
                placeholder="Correo Electrónico"
                onChangeText={setEmail}
                value={email}
                style={styles.input}
            />
            <TextInput
                placeholder="Nacionalidad"
                onChangeText={setNacioalidad}
                value={nacionalidad}
                style={styles.input}
            />
            <TouchableOpacity style={styles.button} onPress={handleActualizarPerfil}>
                <Text style={styles.buttonText}>Actualizar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonEliminar} onPress={handleEliminarPerfil}>
                <Text style={styles.buttonTextEliminar}>Eliminar Cuenta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleEliminarPerfil}>
                <Text style={styles.buttonTextEliminar}>Cerrar Sesión</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 300,
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#007bff',
        width: 150,
        padding: 10,
        borderRadius: 5,
        marginBottom: 5,
    },
    buttonEliminar: {
        backgroundColor: 'red',
        width: 150,
        padding: 10,
        borderRadius: 5,
        marginBottom: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    buttonTextEliminar: {
        color: 'white',
        textAlign: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    }
});

export default ActualizarPerfil;
