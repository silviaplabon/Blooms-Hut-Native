
import React from "react"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import Header from '../../shared/Header'
import Login from "../../shared/Login"
import Register from "../../shared/Register"


const screens = {
    Register: {
        screen:Register,
        navigationOptions:({navigation})=> {
            return {
                headerTitle: () => <Header  navigation={navigation}/>
            }
        }
    }

}

const RegisterStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 110 }
    }
});
export default createAppContainer(RegisterStack);