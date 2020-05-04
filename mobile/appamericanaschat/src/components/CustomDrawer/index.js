import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';

function CustomDrawer() {
    return (
        <View style={styles.container}>
            <View style={styles.userArea}>
                <Image
                    source={require('../../assets/ico.png')}
                    style={styles.user}
                />
                <Text style={styles.email}>email.usuario@logado.com</Text>
                <Text style={styles.nome}>usuario@logado</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userArea: {
        marginTop: 15,
        marginLeft: 10,
        marginBottom: 10,
    },
    user: {
        width: 55,
        height: 55,
    },
    nome: {
        marginTop: 5,
        fontSize: 15,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 15,
    },
});

export default CustomDrawer();
