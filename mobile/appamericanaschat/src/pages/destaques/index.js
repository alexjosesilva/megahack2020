/**
 * home.js
 */

import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import homeImage from '../../assets/home.jpeg';

export default function De() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={homeImage} style={styles.imagem} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F00',
    },
    imagem: {
        width: 420,
        height: 680,
    },
});
