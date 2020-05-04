/**
 * home.js
 */

import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function Cartao_Americanas() {
    return (
        <View style={styles.container}>
            <Text>Cartao Americanas</Text>
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
