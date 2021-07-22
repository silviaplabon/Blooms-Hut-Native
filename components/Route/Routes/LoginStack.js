
import React from "react"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { globalStyles } from "../../../styles/global"
import Header from '../../shared/Header'
import Login from "../../shared/Login"




const screens = {
    Login: {
        screen: Login,
        navigationOptions:({navigation})=> {
            return {
                headerTitle: () => <Header  navigation={navigation}/>
            }
        }
    },
}

const LoginStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 110 }
    }
});
export default createAppContainer(LoginStack);