import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const Header = () => {
    return (
        <SafeAreaView style={styles.header}>
            <Text style={styles.headerText}> Planificador de gastos</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#3b82f6',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        paddingHorizontal: 50,
        paddingVertical: 20
    }
})

export default Header
