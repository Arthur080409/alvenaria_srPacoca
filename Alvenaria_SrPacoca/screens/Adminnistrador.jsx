import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function Administrador({ navigation }) {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [produtos, setProdutos] = useState([]);
  const [editandoId, setEditandoId] = useState(null);

  function salvarProduto() {
    if (!nome || !preco) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    if (editandoId) {
      setProdutos(prev =>
        prev.map(p => (p.id === editandoId ? { ...p, nome, preco: 'R$ ' + preco } : p))
      );
      setEditandoId(null);
    } else {
      const novoProduto = { id: Math.random().toString(), nome, preco: 'R$ ' + preco };
      setProdutos(prev => [...prev, novoProduto]);
      navigation.navigate('Home', { novoProduto });
    }

    setNome('');
    setPreco('');
  }

  function editarProduto(produto) {
    setNome(produto.nome);
    setPreco(produto.preco.replace('R$ ', ''));
    setEditandoId(produto.id);
  }

  function excluirProduto(id) {
    setProdutos(prev => prev.filter(p => p.id !== id));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Painel do Administrador</Text>

      <TextInput placeholder="Nome" style={styles.input} value={nome} onChangeText={setNome} />
      <TextInput placeholder="Preço" style={styles.input} value={preco} onChangeText={setPreco} keyboardType="numeric" />

      <Button title={editandoId ? 'Atualizar Produto' : 'Adicionar Produto'} onPress={salvarProduto} />

      <FlatList
        data={produtos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>{item.preco}</Text>

            <View style={styles.botoes}>
              <TouchableOpacity style={styles.botaoEditar} onPress={() => editarProduto(item)}>
                <Text style={styles.textoBotao}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.botaoExcluir} onPress={() => excluirProduto(item.id)}>
                <Text style={styles.textoBotao}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 },
  card: { backgroundColor: '#ddd', padding: 15, marginTop: 10, borderRadius: 5 },
  nome: { fontWeight: 'bold', fontSize: 16 },
  botoes: { flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' },
  botaoEditar: { backgroundColor: 'orange', padding: 8, borderRadius: 5 },
  botaoExcluir: { backgroundColor: 'red', padding: 8, borderRadius: 5 },
  textoBotao: { color: 'white' },
});
//um teste