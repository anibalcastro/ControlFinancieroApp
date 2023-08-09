import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        //Api

        validador = validarUsuario(email, password);

        if (validador) {
            navigation.navigate('Home');
        }
        else{
            Alert.alert('Login falló', 'Por favor revise sus credenciales, son incorrectas.');
            setEmail('');
            setPassword('');
        }
    };

    const validarUsuario = (correo, contrasenna) => {
        if (correo === 'Admin' && contrasenna === 'Admin'){
            return true
        }
        
        return false
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../Images/Logo.png')} 
                style={styles.logo}
            />

            <TextInput
                placeholder="Ingrese el email o el usuario"
                onChangeText={setEmail}
                value={email}
                style={styles.input}
            />
            <TextInput
                placeholder="Ingrese la contraseña"
                onChangeText={setPassword}
                value={password}
                secureTextEntry
                style={styles.input}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Registarse</Text>
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
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
    }
});

export default LoginScreen;
