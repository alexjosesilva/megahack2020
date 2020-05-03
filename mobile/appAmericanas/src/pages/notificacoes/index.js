/**
* home.js
 */

import React from 'react';
import {View,Text, Image,StyleSheet} from 'react-native';

export default function Notificacoes() {
  return (
	<View style={styles.container}>
		<Text> Notificacoes</Text>
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
