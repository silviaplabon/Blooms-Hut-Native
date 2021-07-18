import React from 'react';
import { useState } from 'react';
import { Alert, Modal, Button, Pressable, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import Card from '../Card';

const WonderfulArrangementShow = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const { name, image, description } = props.itemData;

    return (
        <View style={styles.screen}>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Card style={styles.flowerContainer}>
                                <Image
                                    source={{ uri: `${image}` }}
                                    resizeMode="cover"
                                    style={styles.cardImage}
                                /></Card>

                            <Text style={styles.modalText}>{name}</Text>
                            <Text style={styles.modalText}>{description}</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>


            </View>
            <Card style={styles.flowerContainer}>
                <Image
                    source={{ uri: `${image}` }}
                    resizeMode="cover"
                    style={styles.cardImage}
                />
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={styles.textStyle}>Show Details</Text>
                    </Pressable>
                </View>

            </Card>
        </View>

       
    );
};
const styles = StyleSheet.create({
    screen:{
      width:'90%',
      marginLeft:'5%',
      marginRight:'5%'
    },
    cardImage: {
        width: '100%',
        height: 180,
        borderTopLeftRadius: 9,
        borderTopRightRadius: 9
    },
    name: {
        textAlign: 'left'
    },
    nameContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "#fff0e9",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})

export default WonderfulArrangementShow;