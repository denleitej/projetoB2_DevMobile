import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Card({ elemento, showDetails, toggleDetails }) {
  return (
    <View style={styles.card}>
      <View style={styles.texto}>
        <Text style={styles.t1}>Nome do Grupo: </Text>
        <Text>{elemento.nome_grupo}</Text>
      </View>
      <View style={styles.texto}>
        <Text style={styles.t1}>Tema: </Text>
        <Text>{elemento.tema}</Text>
      </View>
      <View style={styles.texto}>
        <Text style={styles.t1}>Alunos: </Text>
        <Text>
          {elemento.alunos_grupos.map((aluno) => aluno.Aluno.nome).join(', ')}
        </Text>
      </View>

      {/* Exibição dos Detalhes */}
      {showDetails && (
        <View style={styles.texto}>
          <Text style={styles.t1}>Descrição: </Text>
          <Text>{elemento.informacoes}</Text>
        </View>
      )}

      {/* Botão "Ver Mais / Ver Menos" */}
      <TouchableOpacity style={styles.botao} onPress={toggleDetails}>
        <Text style={styles.textoBotao}>
          {showDetails ? 'Ver Menos' : 'Ver Mais'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  card: {
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  t1: {
    color: 'black',
    fontWeight: 'bold',
  },
  botao: {
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  textoBotao: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});
