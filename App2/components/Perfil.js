import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Perfil = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.texto}><Text style={styles.bold}>Nombre:</Text> Rodríguez Navarro Santiago</Text>
      <Text style={styles.texto}><Text style={styles.bold}>Carrera:</Text> Ingeniería en Tecnologias de la Información e Innovación Digital</Text>
      <Text style={styles.texto}><Text style={styles.bold}>Materia:</Text> Desarrollo de Aplicaciones Móviles</Text>
      <Text style={styles.texto}><Text style={styles.bold}>Cuatrimestre:</Text> 4° Cuatrimestre</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    backgroundColor: '#eef2f5',
    borderRadius: 8,
    marginVertical: 10,
    width: '90%',
  },
  texto: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
});