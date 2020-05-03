/**
* Achei_uma_loja
 */

import React from 'react';
import {View,Text, Image,StyleSheet} from 'react-native';

export default function Erica() {
  return (
	<View style={styles.container}>
		<Text>Erica Assistente de Compras</Text>
    <Text>Escrever: Compras Recorrentes</Text>
    <Text>Busca Produtos</Text>
	</View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
