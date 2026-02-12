import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    
      <Text style={{ color: 'red', fontSize: '20px' }}>bem vindo</Text>
      <StatusBar style="auto" />
    </View>
  );
}