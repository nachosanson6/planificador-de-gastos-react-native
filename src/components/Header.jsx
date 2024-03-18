import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const Header = () => {
    return (
        <SafeAreaView >
            <Text style={styles.headerText}> Planificador de gastos</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    headerText: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        paddingHorizontal: 50,
        paddingTop: 20
    }
})

export default Header
