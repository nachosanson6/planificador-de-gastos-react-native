import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput, StyleSheet, Pressable } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import globalStyles from '../styles'


const SpendForm = ({ setModal }) => {

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Pressable style={styles.cancelBtn} onPress={() => setModal(false)}>
                    <Text style={styles.cancelBtnText}>Cancel</Text>
                </Pressable>
            </View>

            <View style={styles.form}>
                <Text style={styles.title}>Nuevo gasto</Text>

                <View style={styles.section}>
                    <Text style={styles.label}>Nombre gasto</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Nombre del gasto. ej.Comida'
                        value={name}
                        onChangeText={setName}
                    />
                </View>
                <View style={styles.section}>
                    <Text style={styles.label}>Gasto</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Gasto. ej.300'
                        keyboardType='numeric'
                        value={amount}
                        onChangeText={setAmount}
                    />
                </View>

                <View style={styles.section}>
                    <Text style={styles.label}>Categoría Gasto</Text>
                    <Picker selectedValue={category} onValueChange={(itemValue) => { setCategory(itemValue) }}>
                        <Picker.Item label="-- Seleccione --" value="" />
                        <Picker.Item label="Ahorro" value="ahorro" />
                        <Picker.Item label="Comida" value="comida" />
                        <Picker.Item label="Casa" value="casa" />
                        <Picker.Item label="Gastos Varios" value="gastos" />
                        <Picker.Item label="Ocio" value="ocio" />
                        <Picker.Item label="Salud" value="Saluc" />
                    </Picker>
                </View>

                <Pressable style={styles.submitBtn}>
                    <Text style={styles.submitBtnText}>Agregar gasto</Text>
                </Pressable>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1e40af',
        flex: 1
    },
    cancelBtn: {
        backgroundColor: '#db2777',
        padding: 10,
        marginTop: 30,
        marginHorizontal: 10,
        borderRadius: 10
    },
    cancelBtnText: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    },
    form: {
        ...globalStyles.container
    },
    title: {
        textAlign: 'center',
        fontSize: 28,
        marginBottom: 30,
        color: '#64748b'
    },
    section: {
        marginVertical: 10
    },
    label: {
        color: '#64748b',
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 10,
        marginTop: 10
    },
    submitBtn: {
        backgroundColor: '#3b82f6',
        padding: 10,
        marginTop: 20,
        borderRadius: 10
    },
    submitBtnText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },

})

export default SpendForm
