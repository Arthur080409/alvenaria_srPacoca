import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ route, navigation }) {
  const [produtos, setProdutos] = useState([
    { id: '1', nome: 'Martelo', preco: 'R$ 35,00' },
    { id: '2', nome: 'Cimento', preco: 'R$ 45,00' },
    { id: '3', nome: 'Bloco de Concreto', preco: 'R$ 3,50' },
    { id: '4', nome: 'Areia', preco: 'R$ 120,00' },
    { id: '5', nome: 'Tijolo', preco: 'R$ 1,20' },
    { id: '6', nome: 'Enxada', preco: 'R$ 50,00' },
  ]);

  // Recebe produtos do Admin sem criar loop
  useEffect(() => {
    if (route && route.params && route.params.novoProduto) {
      const novoProduto = route.params.novoProduto;
      setProdutos(prev => {
        const existe = prev.find(p => p.id === novoProduto.id);
        if (existe) return prev;
        return [...prev, novoProduto];
      });
      route.params.novoProduto = null; // evita re-render duplicado
    }
  }, [route]);

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Produto', { produto: item })}
          >
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>{item.preco}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  card: { backgroundColor: '#ddd', padding: 20, marginBottom: 10, borderRadius: 8 },
  nome: { fontSize: 18, fontWeight: 'bold' },
});