/**
 * Achei_uma_loja
 */

import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function Achei_uma_loja() {
    return (
        <View style={styles.container}>
            <Text>Achei uma Loja</Text>
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
