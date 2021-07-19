import React from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import About from '../About/About';
import FlowersCollection from '../FlowersCollection/FlowersCollection';
import HeaderMain from '../HeaderMain/HeaderMain';
import WonderfulArrangements from '../WonderfulArrangements/WonderfulArrangements';

const Home = () => {
    return (
        <ScrollView >
            <HeaderMain></HeaderMain>
            <About></About>
            <FlowersCollection></FlowersCollection>
            <WonderfulArrangements></WonderfulArrangements>
        </ScrollView>
    );
};

export default Home;