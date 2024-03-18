import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import NewBudget from './src/components/NewBudget';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <NewBudget />
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
