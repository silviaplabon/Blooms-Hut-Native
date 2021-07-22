
import React from "react"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import Header from '../../shared/Header'
import Home from '../../Home/Home'

const screens = {
    Home: {
        screen: Home,
        navigationOptions:({navigation})=> {
            return {
                headerTitle: () => <Header  navigation={navigation}/>
                // headerStyle:{backgroundColor:'#eee'}
            }
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 110 }
    }
});
export default createAppContainer(HomeStack);