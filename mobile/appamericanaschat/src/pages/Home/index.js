/**
 * home.js
 */

import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Modal,
    Alert,
    TextInput,
    TouchableHighlight,
} from 'react-native';
import Voice from 'react-native-voice';

import Icon from 'react-native-vector-icons/FontAwesome';

import logoAmericanas from '../../assets/logo_americanas.png';
import erica_circulo from '../../assets/erica_circulo.png';
import mic_entrada from '../../assets/mic_entrada.png';

// const MicModal = ({modalVisible, setModalVisible}) => {
//     return (
//         <View>
//             <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={modalVisible}
//                 onRequestClose={() => {
//                     Alert.alert('Modal has been closed.');
//                 }}>
//                 <View style={modalStyles.centeredView}>
//                     <View style={modalStyles.modalView}>
//                         <Text style={modalStyles.modalText}>Hello World!</Text>

//                         <TouchableHighlight
//                             style={{
//                                 ...modalStyles.openButton,
//                                 backgroundColor: '#2196F3',
//                             }}
//                             onPress={() => {
//                                 setModalVisible(!modalVisible);
//                             }}>
//                             <Text style={modalStyles.textStyle}>
//                                 Hide Modal
//                             </Text>
//                         </TouchableHighlight>
//                     </View>
//                 </View>
//             </Modal>
//         </View>
//     );
// };

// const modalStyles = StyleSheet.create({
//     centeredView: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 22,
//     },
//     modalView: {
//         margin: 20,
//         backgroundColor: 'white',
//         borderRadius: 20,
//         padding: 35,
//         alignItems: 'center',
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//     },
//     openButton: {
//         backgroundColor: '#F194FF',
//         borderRadius: 20,
//         padding: 10,
//         elevation: 2,
//     },
//     textStyle: {
//         color: 'white',
//         fontWeight: 'bold',
//         textAlign: 'center',
//     },
//     modalText: {
//         marginBottom: 15,
//         textAlign: 'center',
//     },
// });

export default function Home() {
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        Voice._onSpeechResults = results => {
            console.log(JSON.stringify(results));
        };
    }, []);

    return (
        <View style={styles.container}>
            <Image source={logoAmericanas} />
            <Text style={{color: 'white', fontSize: 20, marginTop: 20}}>
                Fale com a
            </Text>
            {/* <Image source={erica_nome} /> */}
            <Image source={erica_circulo} />
            {/* <MicModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            /> */}
            <View style={styles.searchSection}>
                <TextInput
                    style={styles.input}
                    placeholder="Fale comigo..."
                    underlineColorAndroid="transparent"
                    multiline
                />
                <Icon
                    style={styles.searchIcon}
                    name="search"
                    size={30}
                    color="#F00"
                />
            </View>
            <TouchableHighlight
                onPress={() => {
                    if (modalVisible) {
                        Voice.start('pt-BR');
                    } else {
                        Voice.stop();
                    }

                    setModalVisible(!modalVisible);
                }}>
                <Image
                    source={mic_entrada}
                    style={
                        !modalVisible
                            ? {}
                            : {
                                  borderColor: 'yellow',
                                  borderWidth: 5,
                              }
                    }
                />
            </TouchableHighlight>
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
