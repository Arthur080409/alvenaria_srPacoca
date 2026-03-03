import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState('');

  const handleEntrar = () => {
    if (!email || !senha || !user) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    // Navegação segura
    if (email === 'admin@admin.com' && senha === '123') {
      navigation.replace('Admin');
    } else {
      navigation.replace('Home', { nomeUsuario: user });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome"
        style={styles.input}
        value={user}
        onChangeText={setUser}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <TouchableOpacity style={styles.botao} onPress={handleEntrar}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 8, marginBottom: 15 },
  botao: { backgroundColor: '#007AFF', padding: 15, borderRadius: 8, alignItems: 'center' },
  textoBotao: { color: 'white', fontWeight: 'bold' },
});