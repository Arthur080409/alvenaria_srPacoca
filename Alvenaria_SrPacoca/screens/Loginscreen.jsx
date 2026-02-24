import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient'
export default function login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [user, setUser] = useState ("");

  const style = StyleSheet.create({
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
  }
  return (

    <View style={styles.container}>

      <TextInput 
            placeholderr="digite seu nickname"
            value={user}
            onChangeText={(e) => setUser(e.target.value)}
            style={styles.input}
          />

            <TextInput
            placeholder="digite seu email"
            value={email}
            onChangeText={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
            <TextInput
            placeholder="digite sua senha"
            value={senha}
            onChangeText={(e) => setSenha(e.target.value)}
            style={styles.input}
          />
            <Button title="submit" style={styles.button}>
            Entrar
          </Button>
          </View>
  );
          



  