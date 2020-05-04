/**
 * Departamentos.js
 */

import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function Departamentos() {
    return (
        <View style={styles.container}>
            <Text> Departamentos</Text>
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
