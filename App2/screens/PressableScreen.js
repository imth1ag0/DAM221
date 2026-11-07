/*1. Zona Importaciones*/
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Switch } from 'react-native';

/*2. Zona Render o main*/
export default function PressableScreen() {
  const [mensaje, setMensaje] = useState('Presiona el botón');
  const [activado, setActivado] = useState(false);

  return (
    <View style={styles.container}>
      {/* CORREGIDO: style -> styles */}
      <Text style={styles.titulo}>Pressable</Text>

      <Text>{mensaje}</Text>

      <Pressable
        /* CORREGIDO: Se pasa el valor a setMensaje */
        onPress={() => setMensaje('¡Botón presionado!')}
        onPressIn={() => console.log('Inicio de pulsación')}
        onPressOut={() => console.log('Fin de pulsación')}
        onLongPress={() => setMensaje('Pulsación prolongada')}
        disabled={false}
        style={({ pressed }) => [
          styles.boton,
          pressed && styles.botonPresionado,
        ]}
      >
        <Text style={styles.textoBoton}>Presióname</Text>
      </Pressable>

      <View style={styles.separador} />

      <Text style={styles.titulo}>Switch</Text>
      <Text>Estado: {activado ? 'Activado' : 'Desactivado'}</Text>

      <Switch
        value={activado}
        /* CORREGIDO: SetActivado -> setActivado */
        onValueChange={setActivado}
        disabled={false}
        /* CORREGIDO: Sintaxis correcta de objeto con false y true */
        trackColor={{ false: '#999999', true: '#319b80' }}
        thumbColor={activado ? '#ffffff' : '#eeeeee'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  boton: {
    backgroundColor: '#319b80',
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  botonPresionado: {
    backgroundColor: '#1e6655',
  },
  textoBoton: {
    color: 'white',
    fontSize: 16,
  },
  separador: {
    height: 2,
    backgroundColor: '#cccccc',
    width: '90%',
    marginVertical: 35,
  },
});
