/**
* home.js
 */

import React from 'react';
import {View,Text, Image,StyleSheet} from 'react-native';

export default function Meus_Pedidos() {
  return (
	<View style={styles.container}>
		<Text> Meus Pedidos</Text>
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
