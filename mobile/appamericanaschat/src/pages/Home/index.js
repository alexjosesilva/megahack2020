/**
 * home.js
 */

import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

import logoAmericanas from '../../assets/logo_americanas.png';
import erica_circulo from '../../assets/erica_circulo.png';
import mic_entrada from '../../assets/mic_entrada.png';

export default function Home() {
    return (
        <View style={styles.container}>
            <Image source={logoAmericanas} />
            <Text style={{color: 'white', fontSize: 20, marginTop: 20}}>
                Fale com a
            </Text>
            {/* <Image source={erica_nome} /> */}
            <Image source={erica_circulo} />
            <View style={styles.searchSection}>
                <TextInput
                    style={styles.input}
                    placeholder="Fale comigo..."
                    underlineColorAndroid="transparent"
                />
                <Icon
                    style={styles.searchIcon}
                    name="search"
                    size={30}
                    color="#F00"
                />
            </View>
            <Image source={mic_entrada} />
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
