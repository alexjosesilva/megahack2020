/**
 * home.js
 */

import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function Meus_Vales() {
    return (
        <View style={styles.container}>
            <Text> Meus_Vales</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
