import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } 
from 'react-native';

const estilos = StyleSheet.create({
  fundo: {
    backgroundColor:'powderblue', flex:1, paddingTop:25, paddingHorizontal:10
  },
  cabecalho:{
    backgroundColor:'white', flex:0.15, flexDirection:'row', justifyContent:'space-between', alignItems:'center',paddingTop:20 ,paddingHorizontal:20
  },
  corpo:{
    backgroundColor:'white', flex:0.75
  },
  rodape:{
    backgroundColor:'black', flex:0.10
  },
  itemCorpo:{
    backgroundColor:'blue', marginTop:15, borderRadius:20, marginHorizontal:10, height:70, borderLeftWidth:3, borderLeftColor:'red'
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
      <ScrollView id="View03" style={estilos.corpo}>
        <View style={estilos.itemCorpo}>
          <Text>Teste</Text>
        </View>
        <View style={estilos.itemCorpo}>
          <Text>Teste</Text>
        </View>
        <View style={estilos.itemCorpo}>
          <Text>Teste</Text>
        </View>
        <View style={estilos.itemCorpo}>
          <Text>Teste</Text>
        </View>
        <View style={estilos.itemCorpo}>
          <Text>Teste</Text>
        </View>
        <View style={estilos.itemCorpo}>
          <Text>Teste</Text>
        </View>
        <View style={estilos.itemCorpo}>
          <Text>Teste</Text>
        </View>
      </ScrollView>
      <View id="View04" style={estilos.rodape}>
        <Text style={{color:'white'}}>RODAPÉ</Text>
      </View>
    </View>
  );
}
export default App;