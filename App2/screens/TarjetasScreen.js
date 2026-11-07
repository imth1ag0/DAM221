import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, requireNativeComponent} from 'react-native';
import {Perfil} from '../components/Perfil';
export default function TarjetasScreen() { 
  return (
    <View style={styles.container}>
      <Perfil nombre ="lulu" carrera="TID" materia="DAM" cuatri="4to" style = {styles.color1}></Perfil>

      <Perfil nombre ="obed" carrera="TID" materia="DAM" cuatri="4to" style = {styles.color2}></Perfil>
      <Perfil nombre ="juan" carrera="TID" materia="DAM" cuatri="4to" style = {styles.color3}></Perfil>


      <StatusBar style="auto"></StatusBar>
    </View>
  );
}
//poner color a cada tarjeta
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2e2e2',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  color1:{
    backgroundColor:'red'
    
  },
  color2:{
    backgroundColor:'blue'
  },
  color3:{
    backgroundColor:'green'
  }

});