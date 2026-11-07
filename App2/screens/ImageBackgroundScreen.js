/*1. Zona Importaciones*/
import { StyleSheet, Text, View } from 'react-native';

/*2. Zona Render o main*/
export default function ImageBackgroundScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Práctica: ImageBackground & SplashScreen</Text>
      <Text style={styles.equipo}>Equipo: Bersain Benoit Rubio Guerrero</Text>
    </View>
  );
}

/*3. Zona estilos y posicionamiento*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  equipo: {
    fontSize: 14,
    textAlign: 'center',
  },
});