import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

function App() {
  return (
    <View style={{backgroundColor:'powderblue', flex:1, padding:10}}>
      <View style={{backgroundColor:'red', flex:0.15}}>
        <Image source={require("./img/img1.png")} style={{ width: 70, height: 70}}/>
        <Text>NOME SOBRENOME</Text>
        <Image source={require("./img/img2.png")} style={{ width: 70, height: 70}}/>
      </View>
      <View style={{backgroundColor:'green', flex:0.75}}>
        <Text>CONTEÚDO</Text>
      </View>
      <View style={{backgroundColor:'black', flex:0.10}}>
        <Text style={{color:'white'}}>RODAPÉ</Text>
      </View>
    </View>
  );
}
export default App;