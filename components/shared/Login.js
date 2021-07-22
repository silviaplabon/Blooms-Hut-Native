import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState, useContext } from 'react'
import { Button, Input, Image } from 'react-native-elements'
import { KeyboardAvoidingView, StyleSheet, Text, View, ImageBackground } from 'react-native'
import chatImage from '../../images/chat.png'
import { auth } from '../../firebase'
import Register from './Register'
import Home from '../Home/Home'
import { UserContext } from '../../App'



const Login = ({ navigation }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const profileLogo = "https://i.ibb.co/bdj8BSX/images-removebg-preview.png"
    const image = "https://i.pinimg.com/originals/4a/94/26/4a94268541d7a0ed95a8be5138e8a288.jpg"

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                alert("welcome You are logged In")
                navigation.navigate('Home');
            }
        })
        setLoggedInUser(true);
        return unsubscribe
    }, [])

    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then(navigation.navigate('Home'))
            .catch((error) => alert(error))
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar style="light" />
                <Image source={profileLogo}
                    style={{ height: 100, width: 100, borderRadius: 15 }}
                />
                <View style={styles.inputContainer}>
                    <Input
                        placeholder="Email"
                        autoFocus type="email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                    <Input
                        placeholder="Password" secureTextEntry type="password"
                        value={password}
                        onChangeText={pass => setPassword(pass)}
                        onSubmitEditing={signIn}
                    />
                </View>
                    <Button style={styles.signInBtn} title="Login" raised onPress={signIn} />
                    <View style={{ height: 5 }}></View>
                    <Button onPress={() => navigation.navigate('Register')} raised style={styles.registerBtn} title="SignUp" />
                <View style={{ height: 100 }}></View>
        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white'
    },
    inputContainer: {
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        color:'white'
    },
    signInBtn: {
       
    },
    registerBtn: {
       
    },
    loginBackground: {
        width: '100%',
        paddingTop: 15,
        paddingBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    }
})
