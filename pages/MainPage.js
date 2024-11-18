import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { fetchGroups } from './buscarGrupo'; 
import Card from '../components/Card';

export default function MainPage({ navigation }) {
  const [groups, setGroups] = useState([]);
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    const loadGroups = async () => {
      const data = await fetchGroups();
      setGroups(data);
    };
    loadGroups();
  }, []);

  // Função para alternar os detalhes
  const toggleDetails = (id) => {
    setShowDetails(showDetails === id ? null : id); // Alternar entre mostrar/esconder detalhes
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.headerText}>Gerenciar Grupos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('LoginPage')}>
          <Text style={styles.headerText}>Sair</Text>
        </TouchableOpacity>
      </View>
      <Image source={require('./Imagens/inovaweek.png')} style={styles.logo} />
      <ScrollView contentContainerStyle={styles.groupsContainer}>
        {groups.map((group) => (
          <Card
            key={group.id_grupo}
            elemento={group}
            showDetails={showDetails === group.id_grupo} // Passando o estado para o Card
            toggleDetails={() => toggleDetails(group.id_grupo)} // Função para alternar detalhes
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D0075',
    paddingTop: 50,
  },
  header: {
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: 'white',
    zIndex: 1,
  },
  headerText: {
    color: 'black',
    fontSize: 16,
  },
  logo: {
    width: 200,
    height: 100,
    alignSelf: 'center',
    marginVertical: 20,
  },
  groupsContainer: {
    alignItems: 'center',
  },
});
