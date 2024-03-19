import { Alert, StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import NewBudget from './src/components/NewBudget';
import { useState } from 'react';
import BudgetControl from './src/components/BudgetControl';

const App = () => {

  const [isValidBudget, setIsValidBudget] = useState(false)
  const [budget, setbudget] = useState(0)

  newBudgetHandle = (budget) => {
    if (Number(budget) > 0) {

      setIsValidBudget(true)
    } else {
      Alert.alert('Error', ' El presupuesto debe ser mayor de 0', 'O')
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        {!isValidBudget ? (
          <NewBudget
            newBudgetHandle={newBudgetHandle}
            budget={budget}
            setbudget={setbudget} />
        ) : (
          <BudgetControl
            budget={budget} />)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1
  },
  header: {
    backgroundColor: '#3b82f6',
  },
});
export default App
