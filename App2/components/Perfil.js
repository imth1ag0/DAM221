import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useState } from 'react';
export const Perfil = ({nombre,carrera,materia,cuatri}) => {
  const [mostrar,setMostrar]= useState(false);
  return (
    <View >
      <Text> {nombre} </Text>

      {mostrar &&
      <>
      <Text> {carrera} </Text>
      <Text> {materia} </Text>
      <Text> {cuatri} </Text>
      </>
      }
    <Button title="Ver Perfil" onPress={ ()=>setMostrar(!mostrar) } />

    </View>
  );
};
const estilos=StyleSheet.create({
  nombre:{
    fontSize:24,
    fontWeight:500,
    textTransform: 'uppercase'
    },
  carrera:{
    fontSize:20,
    color: "red",
    fontFamily: 'Roboto'
    },
  otrotexto:{
    fontSize:18,
    color: 'green',
    fontFamily: 'Courier',
    fontStyle: 'italic'
    },
  tarjetas:{
    borderWidth: 3,
    borderRadius: 10,
    padding: 15,
    margin: 10,
    },      
    
});
