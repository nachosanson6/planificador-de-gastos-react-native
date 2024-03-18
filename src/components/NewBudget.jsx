import React from 'react'
import { Pressable, Text, TextInput, View, StyleSheet } from 'react-native'

const NewBudget = () => {
    return (
        <View style={styles.container}>
            <Text>Definir presupuesto</Text>
            <TextInput />
            <Pressable>
                <Text> Agregar Presupuesto</Text>
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
    }
})

export default NewBudget
