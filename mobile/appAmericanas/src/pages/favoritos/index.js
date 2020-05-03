/**
* Favoritos
*/

import React from 'react';
import {View,Text, Image,StyleSheet} from 'react-native';

export default function Favoritos() {
  return (
	<View style={styles.container}>
		<Text>Favoritos</Text>
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
