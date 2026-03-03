import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProductScreen({ route }) {
  const produto = route && route.params && route.params.produto;

  if (!produto) {
    return (
      <View style={styles.container}>
        <Text>Produto não encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{produto.nome}</Text>
      <Text style={styles.preco}>{produto.preco}</Text>
      <Text>Produto de alta qualidade para construção.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  nome: { fontSize: 24, fontWeight: 'bold' },
  preco: { fontSize: 20, color: 'green', marginBottom: 10 },
});