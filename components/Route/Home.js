import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { useEffect } from 'react/cjs/react.development';
import { useState } from 'react/cjs/react.production.min';
import { globalStyles } from '../../styles/global';

const Home = ({ navigation }) => {
 
    const pressHandler = () => {
        navigation.push('Review')
    }
    return (
        <View style={globalStyles.container}>
          
            {/* <Text style={globalStyles.titleText}>Home Screen</Text> */}
            <Button title="Go To Review" onPress={pressHandler}></Button>
        </View>
    );
};

export default Home;