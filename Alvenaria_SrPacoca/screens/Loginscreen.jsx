import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import {useState} from 'react';
import {Ionicons} from '@expo/vector-icons'
export default function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [user, setUser] = useState ("");
 

  const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
/*
font style
widht
height
alignitens
 fetch docs 
 /*axios docs 
 async storage react-nactive docs
 api = pokeapi; tmdb; jsonplceholder; faeStorage. 
teste teste
*/


/*if (!email || !senha || !user){

  alert("necessario preencher as lacunas.")
  return;}*/

    console.log("usuario:", user);
    console.log("email:", email);
    console.log("senha:", senha);
    return (
      
      <View style={styles.container}>

      <TextInput  style={{ color: 'blue', fontSize: 20, fontWeight: 'bold' }}            
            placeholder="digite seu Nome"
            value={user}
            onChangeText={(e) => setUser(e.target.value)}
            style={styles.input}
            value={user}
            onChangeText={(novoTexto) => setUser(novoTexto)}
            />

            <TextInput
            placeholder="digite seu email"
            value={email}
            onChangeText={(e) => setEmail(e.target.value)}
            style={styles.input}
            value={email}
            onChangeText={(novoTexto) => setEmail(novoTexto)}
            />
            <TextInput
            type="password"
            placeholder="digite sua senha"
            value={senha}
            onChangeText={(e) => setSenha(e.target.value)}
            style={styles.input}
            value={senha}
            onChangeText={(novoTexto) => setSenha(novoTexto)}
            />
      

            <Button title="Entrar" style={styles.button}>
            Entrar
          </Button>
          </View>
  );
  
  
  
  
  
}