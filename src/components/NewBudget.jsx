import React from 'react'
import { Pressable, Text, TextInput, View, StyleSheet } from 'react-native'
import globalStyles from '../styles'

const NewBudget = ({ newBudgetHandle, budget, setbudget }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Definir presupuesto</Text>
            <TextInput
                keyboardType='numeric'
                placeholder='Agrega tu presupuesto: Ej:300'
                style={styles.input}
                value={budget.toString()}
                onChangeText={setbudget}
            />
            <Pressable style={styles.btn}
                onPress={() => newBudgetHandle(budget)}
            >
                <Text style={styles.btnText}> Agregar Presupuesto</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...globalStyles.container
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
