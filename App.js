import { Alert, Pressable, StyleSheet, View, Image, Modal } from 'react-native';
import Header from './src/components/Header';
import NewBudget from './src/components/NewBudget';
import { useState } from 'react';
import BudgetControl from './src/components/BudgetControl';
import SpendForm from './src/components/SpendForm';

const App = () => {

  const [isValidBudget, setIsValidBudget] = useState(false)
  const [budget, setbudget] = useState(0)
  const [expenses, setExpenses] = useState([])
  const [modal, setModal] = useState(false)


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
            budget={budget} expenses={expenses} />)}
      </View>


      {modal && (
        <Modal
          animationType='slide'
          visible={modal}
        >
          <SpendForm />

        </Modal>
      )}

      {isValidBudget && (
        <Pressable
          onPress={() => setModal(true)}
        >
          <Image
            style={styles.image}
            source={require('./src/img/nuevo-gasto.png')} />
        </Pressable>
      )}
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
  image: {
    width: 70,
    height: 70,
    position: 'absolute',
    top: 190,
    right: 20
  }
});
export default App
