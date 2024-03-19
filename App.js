import { Alert, StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import NewBudget from './src/components/NewBudget';

const App = () => {

  newBudgetHandle = (budget) => {
    if (Number(budget) > 0) {
      console.log('presupuesto valido')
    } else {
      Alert.alert('Error', ' El presupuesto debe ser mayor de 0', 'O')
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <NewBudget
          newBudgetHandle={newBudgetHandle} />
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
