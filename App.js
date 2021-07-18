import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import FlowersCollection from './components/FlowersCollection/FlowersCollection';
import Header from './components/Header/Header'
import HeaderMain from './components/HeaderMain/HeaderMain';
import { useFonts } from "expo-font";
import About from './components/About/About';
import WonderfulArrangement from './components/WonderfulArrangements/WonderfulArrangements'


export default function App() {
  const [loaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Philosopher-Bold": require("./assets/fonts/Philosopher-Bold.ttf"),
    "Philosopher-Regular": require("./assets/fonts/Philosopher-Regular.ttf"),
    "DancingScript-Bold": require("./assets/fonts/DancingScript-Bold.ttf"),
    "DancingScript-Regular": require("./assets/fonts/DancingScript-Regular.ttf"),
    "BonaNova-Regular" : require("./assets/fonts/BonaNova-Regular.ttf"),
    "BonaNova-Bold" : require("./assets/fonts/BonaNova-Bold.ttf"),
    "Dosis-Regular": require("./assets/fonts/Dosis-Regular.ttf"),
    "Dosis-Bold": require("./assets/fonts/Dosis-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <ScrollView >
      <Header />
      <HeaderMain></HeaderMain>
      <About></About>
      <FlowersCollection></FlowersCollection>
      <WonderfulArrangement></WonderfulArrangement>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});



{/* <View styles={styles.header}>
        <Text style={styles.boldText}>Name{name}</Text>
        <Text style={styles.boldText}>Age: {age}</Text>

      </View> */}
{/* <View styles={styles.buttonContainer}>
        <Button title="update state" ></Button>
      </View> */}
{/* <TextInput style={styles.nameInput} placeholder='name' onChangeText={(val) => setName(val)}></TextInput>
      <TextInput keyboardType='numeric' style={styles.nameInput} placeholder='age' onChangeText={(val) => setAge(val)}></TextInput>
      <StatusBar style="auto" />  */}