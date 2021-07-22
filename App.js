import { StatusBar, StyleSheet } from 'react-native';
import React, { useEffect, useState,createContext } from 'react';
import { useFonts } from "expo-font";
import Navigator from './components/Route/Drawer/drawer'

export const UserContext = createContext();





export default function App() {
  const [loggedInUser, setLoggedInUser] = useState(false);
  useEffect(() => {
    StatusBar.setHidden(true);
  }), []
  const [loaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Philosopher-Bold": require("./assets/fonts/Philosopher-Bold.ttf"),
    "Philosopher-Regular": require("./assets/fonts/Philosopher-Regular.ttf"),
    "DancingScript-Bold": require("./assets/fonts/DancingScript-Bold.ttf"),
    "DancingScript-Regular": require("./assets/fonts/DancingScript-Regular.ttf"),
    "BonaNova-Regular": require("./assets/fonts/BonaNova-Regular.ttf"),
    "BonaNova-Bold": require("./assets/fonts/BonaNova-Bold.ttf"),
    "Dosis-Regular": require("./assets/fonts/Dosis-Regular.ttf"),
    "Dosis-Bold": require("./assets/fonts/Dosis-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Navigator />
    </UserContext.Provider>
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