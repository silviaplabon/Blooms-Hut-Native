import React from "react"
import { createAppContainer } from "react-navigation"
import { createStackNavigator} from "react-navigation-stack"
import Home from '../Home'
import Review from '../Review'
import About from '../../About/About'
import Header from '../../shared/Header'

const screens={
    About:{
        screen:About,
        navigationOptions:({navigation})=> {
            return {
                headerTitle: () => <Header  navigation={navigation}/>
                // headerStyle:{backgroundColor:'#eee'}
            }
        }
    }
}
const AboutStack=createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'#444',
        headerStyle:{backgroundColor:'#eee',height:110}
    }
});
export default AboutStack;