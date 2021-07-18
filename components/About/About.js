import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

const About = () => {
    const image = { uri: 'https://i.ibb.co/BnWbfj4/about-Content-Background.png' }
    return (
        <View style={styles.aboutContainer}>
            <ImageBackground source={image} resizeMode="cover" style={styles.aboutTextBackground}>
                <View style={styles.aboutTextContainer}>
                    <Text style={styles.headerTitle}>Wonderful Gift</Text>
                    <Text style={styles.headerSubtitle}>A Perfect Spot</Text>
                    <Text style={styles.headerPTag}> As a full service florist, our team can handle all your floral needs. We offer a multitude of services including retail, residential, full scale wedding and event planning.</Text>
                    <View style={styles.shopNow}>
                        <Button title="Shop Now" color="#a03c3a" style={styles.shopButton}></Button>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.aboutHalfContainer}>
                <Image
                    source={{ uri: 'https://i.ibb.co/0jVPrBq/about1.jpg' }}
                    resizeMode="cover"
                    style={styles.cardImage}
                />
            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    aboutContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff0e9'
    },
    aboutTextBackground: {
        height: 300,
        width: '100%',
    },
    aboutTextContainer: {
        flex: 1,
        width: '90%',
        height: 300,
        marginLeft: '5%',
        marginRight: '5%',
        paddingTop: 80
    },
    headerTitle: {
        fontSize: 20,
        color: 'black',
        fontFamily: "Philosopher-Bold",
        paddingBottom: 20
    },
    headerSubtitle: {
        fontSize: 13,
        color: 'black',
        fontFamily: "DancingScript-Bold",
        paddingBottom: 10

    },
    headerPTag: {
        fontSize: 17,
        color: 'black',
        fontFamily: "Dosis-Regular"
    },
    cardImage: {
        width: '90%',
        height: 250,
        margin: '5%',
        borderRadius: 15
    },
    shopNow: {
      
        marginTop:20,
        elevation: 3,
        width:150
    },
    shopButton: {
        fontFamily: "DancingScript-Bold",
        marginTop:40 ,
    },
})
export default About;