import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const Header = () => {

    return (
        <View style={styles.header}>
            <Text style={[styles.headerTitle, styles.flexOne, styles.textLeft]}>Home</Text>
            <Text style={[styles.headerTitle, styles.flexOne, styles.textLeft]}>About</Text>
            <Text style={[styles.headerTitle, styles.flexOne, styles.textLeft]}>Flowers</Text>
            <Text style={[styles.headerTitle, styles.flexTwo, styles.textRight]}>Arrangements</Text>
            <Text style={[styles.headerTitle, styles.flexOne, styles.textRight]}>Login</Text>
        </View>

    );
};
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        top: 0,
        padding: 10,
        backgroundColor: '#1b1b1b',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        fontFamily: "Philosopher-Bold"
    },
    headerTitle: {
        fontSize: 12,
        color: 'white',
        fontFamily: "Philosopher-Bold"
    },
    textLeft: {
        textAlign: 'left'
    },
    textRight: {
        textAlign: 'right'
    },
    flexOne: {
        flex: 1
    },
    flexTwo: {
        flex: 2
    }
})


export default Header;
