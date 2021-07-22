import { StatusBar } from 'expo-status-bar'
import React, { useContext, useEffect, useState } from 'react'
import { KeyboardAvoidingView,ImageBackground } from 'react-native'
import { StyleSheet, View } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'
import { UserContext } from '../../App'
import { auth } from '../../firebase'
import Card from '../Card'

const Register = ({ navigation }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [imageURL, setImageURL] = useState("")
    const [userExist, setUserExist] = useState(null);
    const image = "https://i.pinimg.com/originals/4a/94/26/4a94268541d7a0ed95a8be5138e8a288.jpg"
    

    useEffect(() => {
        setLoggedInUser(true)
    }, [userExist])

    const register = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                authUser.user.updateProfile({
                    displayName: name,
                    photoURL: imageURL || "https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png"
                })
                setUserExist(authUser);
                navigation.navigate('Home')
            })
            .catch((error) => alert(error.message))
    }


    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
                <ImageBackground source={image} resizeMode="cover" style={styles.registerBackground}>
                    <Text h3 style={{ marginBottom: 50, textAlign: 'center', fontFamily: "Philosopher-Bold" }}>
                        Create an account
                    </Text>

                    <View style={styles.inputContainer}>
                        <Input
                            placeholder="Full Name"
                            autoFocus
                            type="text"
                            value={name}
                            onChangeText={(text) => setName(text)}
                        />
                        <Input
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChangeText={(email) => setEmail(email)}
                        />
                        <Input
                            placeholder="Password"
                            type="password"
                            secureTextEntry
                            value={password}
                            onChangeText={(pass) => setPassword(pass)}
                        />
                    </View>
                    <Button containerStyle={styles.button} raised onPress={register} title="Register"></Button>
                </ImageBackground>
        </KeyboardAvoidingView>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white'
    },
    inputContainer: {
        width: 290,
    },
    registerBackground:{
        width:310,
        paddingTop:15,
        paddingBottom:15,
        justifyContent:'center',
        alignItems:'center',
        margin:10
    },
    button: {
        width: 270,
        marginTop: 10,
        backgroundColor:'#ef3c48'
    }
})
