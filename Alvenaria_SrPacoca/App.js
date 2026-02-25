import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import HomeScreen from './screens/Loginscreen'; // Importação
import Login from './screens/Loginscreen';
export default function App() {
  return (
    <View style={styles.container}>
     <Text>teste do site</Text>
    
   <Login/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});