import { StyleSheet, View, Text, Button } from 'react-native';
import { useState } from 'react';

import TarjetasScreen from './TarjetasScreen';
import SafeScreen from './SafeScreens';
import PressableScreen from './PressableScreen';
import TextInputScreen from './TextInputScreen';
import FlatListScreen from './FlatListScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import ModalScreen from './ModalScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';

export default function MenuScreen() { 
  const [screen, setScreen] = useState('menu');
  
  switch (screen) {
    case 'tarjetas':
      return <TarjetasScreen />;

    case 'safe':
      return <SafeScreen />;

    case 'pressable':
      return <PressableScreen />;

    case 'textinput':
      return <TextInputScreen />;

    case 'flatlist':
      return <FlatListScreen />;

    case 'imagebackground':
      return <ImageBackgroundScreen />;

    case 'modal':
      return <ModalScreen />;

    case 'activityindicator':
      return <ActivityIndicatorScreen />;

    case 'menu':
    default:
      return (
        <View style={styles.background}>
          <View style={styles.cardContainer}>
            <Text style={styles.title}>Menú de Prácticas</Text>
            
            <View style={styles.buttonWrapper}>
              <Button title="Pract: Tarjetas" color="#4F46E5" onPress={() => setScreen('tarjetas')} />
            </View>
            <View style={styles.buttonWrapper}>
              <Button title="Pract: SafeAreaView" color="#2563EB" onPress={() => setScreen('safe')} />
            </View>
            <View style={styles.buttonWrapper}>
              <Button title="Pract: Pressable" color="#0284C7" onPress={() => setScreen('pressable')} />
            </View>
            <View style={styles.buttonWrapper}>
              <Button title="Pract: Textinput" color="#0D9488" onPress={() => setScreen('textinput')} />
            </View>
            <View style={styles.buttonWrapper}>
              <Button title="Pract: Flatlist" color="#16A34A" onPress={() => setScreen('flatlist')} />
            </View>
            <View style={styles.buttonWrapper}>
              <Button title="Pract: ImageBackground" color="#D97706" onPress={() => setScreen('imagebackground')} /> 
            </View>
            <View style={styles.buttonWrapper}>
              <Button title="Pract: Modal" color="#DC2626" onPress={() => setScreen('modal')} />
            </View>
            <View style={styles.buttonWrapper}>
              <Button title="Pract: ActivityIndicator" color="#9333EA" onPress={() => setScreen('activityindicator')} /> 
            </View>
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#F3F4F6', // Fondo suave para toda la pantalla
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  cardContainer: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // Sombra para darle profundidad
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5, // Sombra en Android
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonWrapper: {
    width: '100%',
    marginVertical: 4, // Espaciado parejo entre botones
  },
});