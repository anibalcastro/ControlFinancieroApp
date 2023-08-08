import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, Image } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'

const RegistroIngreso = () => {
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [monto, setMonto] = useState('');
    const [showPicker, setShowPicker] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);


    const data = [
        { label: 'Salario', value: 'Salario' },
        { label: 'Deposito', value: 'Deposito' },
        { label: 'Ahorro', value: 'Ahorro' },
      ];

    const handleSave = () => {
        // Logic to save form data
        // Access titulo, categoria, and monto here
    };

    return (
        <View style={styles.container}>
          <Text style={styles.heading}>Registro de Ingresos</Text>
      
          <TextInput
            style={styles.input}
            placeholder="Título"
            value={titulo}
            onChangeText={setTitulo}
          />
      
          <TouchableOpacity
            style={styles.comboButton}
            onPress={() => setModalVisible(true)}
          >
            <Text>{categoria || 'Selecciona una categoría'}</Text>
          </TouchableOpacity>
      
          {/* Modal for category selection */}
          <Modal
            animationType="slide"
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <SelectList
                setSelected={(val) => {
                  setCategoria(val);
                  setModalVisible(false); // Hide the modal after selection
                }}
                data={data}
                save="value"
                search={false}
              />
            </View>
          </Modal>
          <TextInput
            style={styles.input}
            placeholder="Monto"
            keyboardType="numeric"
            value={monto}
            onChangeText={setMonto}
          />
      
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Image source={require('../../Images/Guardar.png')} style={styles.imagenGuardar} />
            <Text style={styles.buttonTextGuardar}>Guardar</Text>
          </TouchableOpacity>
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
      },
      heading: {
        fontSize: 24,
        marginBottom: 20,
      },
      input: {
        width: 300,
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        textAlign: "center"
      },
      comboButton: {
        width: 300,
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
      },
      comboButtonText: {
        fontSize: 16,
        color: '#333',
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
      },
      button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'green',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
      },
      buttonTextGuardar: {
        color: 'white',
        fontSize: 16,
        marginLeft: 10,
      },
      imagenGuardar: {
        width: 20,
        height: 20,
      },
});

export default RegistroIngreso;
