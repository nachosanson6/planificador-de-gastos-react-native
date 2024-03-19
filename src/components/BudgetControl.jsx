import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import globalStyles from '../styles'
import { formatedAmount } from '../helpers'


const BudgetControl = ({ budget, expenses }) => {

    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)

    useEffect(() => {
        const totalSpent = expenses.reduce((total, expense) => Number(expense.amount) + total, 0)

        const totalAvailable = budget - totalSpent

        setSpent(totalSpent)
        setAvailable(totalAvailable)
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.graficCenter}>
                <Image style={styles.image}
                    source={require('../img/grafico.jpg')} />
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.value}>
                    <Text style={styles.label}>Presupuesto: </Text>
                    {formatedAmount(budget)}
                </Text>

                <Text style={styles.value}>
                    <Text style={styles.label}>Disponible: </Text>
                    {formatedAmount(available)}
                </Text>

                <Text style={styles.value}>
                    <Text style={styles.label}>Gastado: </Text>
                    {formatedAmount(spent)}
                </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...globalStyles.container
    },
    graficCenter: {
        alignItems: 'center'
    },
    image: {
        width: 250,
        height: 250
    },
    textContainer: {
        marginTop: 50,
    },
    value: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 10
    },
    label: {
        fontWeight: '700',
        color: '#3b82f6'
    }
});

export default BudgetControl
