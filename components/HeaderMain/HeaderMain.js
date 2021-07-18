import React, { useContext, useEffect, useState } from 'react';
import { Button, StyleSheet, ImageBackground, Text, TextInput, View, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { useHistory } from 'react-router-dom';
const image = { uri: 'https://i.ibb.co/4KHz3XK/bloomshutbackground1.jpg' }

const HeaderMain = () => {
    // const history = useHistory();
    // const [searchData, setSearchData] = useState(null);
    // const handleChange = event => {
    //     const name = event.target.value;
    //     setSearchData(name);
    // }
    // const handleSearchOption = name => {
    //     history.push(`/${name}`)
    // }
    return (
        <View style={styles.headerMainContainer}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <View style={{ marginTop: 30, flexDirection: 'row', padding: 15 }}>
                    <View style={styles.searchContainer}>
                        <Icon name="search" size={30} style={{ color: 'black', paddingLeft: 10 }} />
                        <TextInput placeholder="Search" style={styles.input} />
                    </View>
                    <View style={styles.sortBtn}>
                        <Icon name="sort" size={30} style={{ color: 'black' }} />
                    </View>
                </View>
                <Text style={styles.headerTitle}>Let's make Beautiful flowers part of your life</Text>
                <Text style={styles.headerSubtitle}>  We offer traditional and contemporary floral design styles
                    that are appropriate for birthdays, anniversaries, get well,
                    new baby, sympathy, holidays or just because.</Text>
                <View style={styles.shopNow}>
                    <Button title="Shop Now" color="#a03c3a" style={styles.shopButton}></Button>
                </View>
            </ImageBackground>
        </View>
    );
};


const styles = StyleSheet.create({
    headerMainContainer: {
        flex: 1,
        width: '100%',
        height:500,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    headerTitle: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
        fontFamily: "Philosopher-Bold"
    },
    headerSubtitle: {
        margin: 10,
        color: 'white',
        textAlign: 'center',
        fontFamily: "DancingScript-Bold"
    },
    shopNow: {
        // marginLeft: '35%',
        // marginRight: '35%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
    },
    shopButton: {
        fontFamily: "DancingScript-Bold",
        backgroundColor: '#1b1b1b',
        backgroundColor: 'black',
    },
    searchContainer: {
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        color: 'black',
        paddingLeft: 10,
    },
    sortBtn: {
        marginLeft: 10,
        height: 50,
        width: 50,
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default HeaderMain;