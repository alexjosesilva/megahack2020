/**
* home.js
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function Home() {
  return (
	<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
		<Text style={{fontSize:35}}>Home</Text>
	</View>
  );
}


