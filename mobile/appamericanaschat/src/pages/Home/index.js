/**
 * home.js
 */

import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import logoAmericanas from '../../assets/logo_americanas.png';
import {TextInput} from 'react-native-gesture-handler';
// import {Icon} from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={{color: 'white', fontSize: 24}}>LOGO AMERICANAS</Text>
            <Text style={{color: 'white', fontSize: 20, marginTop: 20}}>
                Fale com a ERICA
            </Text>
            <View style={styles.searchSection}>
                <TextInput
                    style={styles.input}
                    placeholder="Fale comigo..."
                    underlineColorAndroid="transparent"
                />
                <Icon
                    style={styles.searchIcon}
                    name="search"
                    size={20}
                    color="#F00"
                />
            </View>
            <TextInput>Fale comigo</TextInput>
            {/* <Image source={logoAmericanas} style={styles.imagem} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    imagem: {
        width: 420,
        height: 680,
    },
    searchSection: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        color: '#424242',
        borderRadius: 10,
    },
});
