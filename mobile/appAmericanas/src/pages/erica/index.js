/**
* Achei_uma_loja
 */

import React from 'react';
import {View,Text, Image,StyleSheet} from 'react-native';

export default function Erica() {
  return (
	<View style={styles.container}>
     <Text   style={styles.texto}>Erica - Seu Assitente de Compas</Text>
		 <Image
            source={require('../../assets/erica.jpeg')}
            style={styles.imagem}
        />
	</View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'	
    },
	imagem:{
		width:400,
		height:480
	}
})
