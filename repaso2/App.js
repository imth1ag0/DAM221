import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
  ImageBackground,
  ActivityIndicator,
  Alert,
  SafeAreaView
} from 'react-native';

export default function App() {
  // Estado para controlar la pantalla de bienvenida (SplashScreen) por 2 segundos
  const [mostrarSplash, setMostrarSplash] = useState(true);

  // Estados del formulario
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');

  // Estado para la lista de libros (empieza vacía)
  const [libros, setLibros] = useState([]);

  // Estado para el indicador de carga (ActivityIndicator por 4 segundos)
  const [guardando, setGuardando] = useState(false);

  // 1. Mostrar SplashScreen durante 2 segundos al iniciar
  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Función para validar y agregar un libro
  const handleAgregarLibro = () => {
    // Validar que todos los campos estén llenos
    if (!titulo.trim() || !autor.trim() || !genero.trim()) {
      Alert.alert('Alert', 'Todos los campos son obligatorios.');
      return;
    }

    // Activar el indicador de carga (ActivityIndicator)
    setGuardando(true);

    // Simular tiempo de espera de 4 segundos
    setTimeout(() => {
      const nuevoLibro = {
        id: Date.now().toString(),
        titulo: titulo.trim(),
        autor: autor.trim(),
        genero: genero.trim(),
      };

      // Agregar libro a la lista
      setLibros((librosAnteriores) => [...librosAnteriores, nuevoLibro]);
      
      // Limpiar los TextInput
      setTitulo('');
      setAutor('');
      setGenero('');
      
      // Desactivar ActivityIndicator
      setGuardando(false);

      // Notificar con un Alert
      Alert.alert('Alert', 'Libro guardado correctamente.');
    }, 4000);
  };

  // PANTALLA 1: SplashScreen (se muestra solo los primeros 2 segundos)
  if (mostrarSplash) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashTitle}>¡Bienvenido!</Text>
        <Text style={styles.splashSubtitle}>Registro de Libros Leídos</Text>
      </View>
    );
  }

  // PANTALLA 2: Pantalla principal con fondo ImageBackground
  return (
    <ImageBackground
      source={require('./assets/background.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerTitle}>Catálogo de Libros</Text>

        {/* Formulario de Registro */}
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Título del libro"
            placeholderTextColor="#888"
            value={titulo}
            onChangeText={setTitulo}
          />
          <TextInput
            style={styles.input}
            placeholder="Autor"
            placeholderTextColor="#888"
            value={autor}
            onChangeText={setAutor}
          />
          <TextInput
            style={styles.input}
            placeholder="Género"
            placeholderTextColor="#888"
            value={genero}
            onChangeText={setGenero}
          />

          {/* Botón Pressable */}
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
              guardando && styles.buttonDisabled
            ]}
            onPress={handleAgregarLibro}
            disabled={guardando}
          >
            <Text style={styles.buttonText}>Agregar Libro</Text>
          </Pressable>
        </View>

        {/* Simulación de espera con ActivityIndicator (4 segundos) */}
        {guardando && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#ffffff" />
            <Text style={styles.loadingText}>Guardando libro...</Text>
          </View>
        )}

        {/* Contador de Libros */}
        <Text style={styles.counterText}>Total de libros: {libros.length}</Text>

        {/* Lista de libros registrados */}
        <FlatList
          data={libros}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{item.titulo}</Text>
              <Text style={styles.cardText}>Autor: {item.autor}</Text>
              <Text style={styles.cardText}>Género: {item.genero}</Text>
            </View>
          )}
          contentContainerStyle={styles.listContainer}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#0f172a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  splashSubtitle: {
    fontSize: 16,
    color: '#cbd5e1',
  },
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 15,
  },
  formContainer: {
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#1d4ed8',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonDisabled: {
    backgroundColor: '#93c5fd',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loadingContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  loadingText: {
    color: '#ffffff',
    marginTop: 5,
    fontSize: 14,
    fontWeight: '600',
  },
  counterText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 4,
  },
  cardText: {
    fontSize: 14,
    color: '#334155',
  },
});