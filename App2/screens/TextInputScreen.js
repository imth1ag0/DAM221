/*1. Zona Importaciones*/
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, Alert } from 'react-native';

/*2. Zona Render o main*/
export default function TextInputScreen() {

  // STATE de cada TextInput
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [password, setPassword] = useState('');
  const [comentarios, setComentario] = useState('');

  const alertasSimple = () => {
    Alert.alert('Hola', 'Cara de bola');
  };

  const alertasDosBotones = () => {
    Alert.alert('Confirmar', '¿Deseas continuar?', [
      { text: 'Cancelar' },
      { text: 'Aceptar' },
    ]);
  };

  const mostrarNombre = () => {
    Alert.alert('Tu nombre', nombre === '' ? 'No escribiste nada' : nombre);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>TextInput y Alert</Text>

      <Text style={styles.subtitulo}>1. TextInput básico</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <Text>Escribiste: {nombre}</Text>

      <Text style={styles.subtitulo}>2. Teclado Numérico</Text>
      <TextInput
        style={styles.input}
        placeholder="Edad"
        keyboardType="numeric"
        maxLength={3}
        value={edad}
        onChangeText={setEdad}
      />

      <Text style={styles.subtitulo}>3. Contraseña (secureTextEntry)</Text>
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.subtitulo}>4. Varias Lineas</Text>
      <TextInput
        style={[styles.input, styles.grande]}
        placeholder="Escribe tu comentario"
        multiline={true}
        numberOfLines={4}
        value={comentarios}
        onChangeText={setComentario}
      />

      <Text style={styles.subtitulo}>Ejemplo de Alert</Text>
      <View style={styles.boton}>
        <Button title="Alerta simple" onPress={alertasSimple} />
      </View>
      <View style={styles.boton}>
        <Button title="Alerta con dos botones" onPress={alertasDosBotones} />  
      </View>      
      <View style={styles.boton}>
        <Button title="Mostrar mi nombre" onPress={mostrarNombre} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: { padding: 24, paddingTop: 60, backgroundColor: '#fff' },
    titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
    subtitulo: { fontSize: 16, fontWeight: 'bold', marginTop: 16, marginBottom: 6 },
    input: {
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 6,
        padding: 10,
        fontSize: 16,
    },
    grande: { height: 90, textAlignVertical: 'top' },
    boton: { marginBottom: 10 },
});