import React from 'react'
import { Pressable, Text, TextInput, View, StyleSheet } from 'react-native'

const NewBudget = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Definir presupuesto</Text>
            <TextInput
                keyboardType='numeric'
                placeholder='Agrega tu presupuesto: Ej:300'
                style={styles.input}
            />
            <Pressable style={styles.btn}>
                <Text style={styles.btnText}> Agregar Presupuesto</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginHorizontal: 10,
        borderRadius: 10,
        paddingVertical: 40,
        paddingHorizontal: 20,
        transform: [{ translateY: 50 }],
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    label: {
        textAlign: 'center',
        fontSize: 24,
        color: '#3b82f6',
    },

    input: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 30
    },
    btn: {
        marginTop: 30,
        backgroundColor: '#1048a4',
        padding: 10,
        borderRadius: 10

    },
    btnText: {
        color: '#fff',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})

export default NewBudget
