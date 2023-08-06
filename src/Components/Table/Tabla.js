import React from 'react';
import { View, ScrollView , StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component'; // Asegúrate de importar correctamente Table, Row y Rows

const Tabla = ({ encabezado, data }) => {

    return (
        <View style={styles.container}>
            <ScrollView>
            <Table borderStyle={{ borderWidth: 1, borderColor: '#ffa1d2' }}>
                <Row data={encabezado} style={styles.HeadStyle} textStyle={styles.tableTextHead} />
                <Rows data={data} textStyle={styles.TableText} />
            </Table>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 18,
        paddingTop: 10,
        backgroundColor: '#f0f0f0',
        width: "100%"
    },
    HeadStyle: {
        height: 60,
        alignContent: "center",
        backgroundColor: '#ffe0f0',
        fontWeight: 'bold',
    },
    tableTextHead : {
        margin: 10,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: "center",
    },
    TableText: {
        margin: 10,
        fontSize: 14,
        textAlign: "center",
    }
});

export default Tabla;
