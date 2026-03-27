import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

function App() {
  return (
    <View style={{backgroundColor:'powderblue', flex:1, paddingLeft:10, paddingRight:10, paddingTop:20, paddingBottom:10}}>
      <View style={{backgroundColor:'white', flex:0.15, flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:20}}>
        <Image source={require("./img/img1.png")} style={{ width: 50, height: 50}}/>
        <Text>Nome Sobrenome</Text>
        <Image source={require("./img/img2.png")} style={{ width: 20, height: 30}}/>
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