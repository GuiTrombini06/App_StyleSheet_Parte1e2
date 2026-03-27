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
    backgroundColor:'white', flex:0.10, flexDirection:'row',justifyContent:'space-around', alignItems:'center'
  },
  itemCorpo:{
    backgroundColor:'blue', marginTop:15, borderRadius:20, marginHorizontal:10, height:70, borderLeftWidth:3, borderLeftColor:'red'
  }
});

function App() {
  let Img1 = require("./img/img1.png");
  let Img2 = require("./img/img2.png");
  let Img7 = require("./img/img7.png");
  let Img8 = require("./img/img8.png");
  let Img9 = require("./img/img9.png");
  let Img10 = require("./img/img10.png");
  let Img11 = require("./img/img11.png");

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
        <Image source={Img7} style={{ width: 50, height: 60, resizeMode:'contain'}}/>
        <Image source={Img8} style={{ width: 50, height: 60, resizeMode:'contain'}}/>
        <Image source={Img9} style={{ width: 60, height: 60, resizeMode:'contain', borderRadius:'100%'}}/>
        <Image source={Img10} style={{ width: 50, height: 60, resizeMode:'contain'}}/>
        <Image source={Img11} style={{ width: 50, height: 60, resizeMode:'contain'}}/>
      </View>
    </View>
  );
}
export default App;