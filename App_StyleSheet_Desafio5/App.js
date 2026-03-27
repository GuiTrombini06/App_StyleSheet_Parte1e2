import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } 
from 'react-native';

const estilos = StyleSheet.create({
  fundo: {
    backgroundColor:'powderblue', flex:1, paddingTop:25, paddingHorizontal:10
  },
  cabecalho:{
    backgroundColor:'white', flex:0.15, flexDirection:'row', justifyContent:'space-between', alignItems:'center',paddingTop:20 ,paddingHorizontal:20
  }
});

function App() {
  let Img1 = require("./img/img1.png");
  let Img2 = require("./img/img2.png");

  return (
    <View id="View01" style={estilos.fundo}>
      <View id="View02" style={estilos.cabecalho}>
        <View id="View05" style={{backgroundColor:'white', flexDirection:'row', alignItems:'center'}}>
          <Image source={Img1} style={{ width: 50, height: 50}}/>
          <Text style={{marginLeft:15}}>Nome Sobrenome</Text>
        </View>
        <Image source={Img2} style={{ width: 18, height: 24, resizeMode:"contain"}}/>
      </View>
      <View id="View03" style={{backgroundColor:'green', flex:0.75}}>
        <Text>CONTEÚDO</Text>
      </View>
      <View id="View04" style={{backgroundColor:'black', flex:0.10}}>
        <Text style={{color:'white'}}>RODAPÉ</Text>
      </View>
    </View>
  );
}
export default App;