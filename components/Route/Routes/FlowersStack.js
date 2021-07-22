import React from "react"
import { createAppContainer } from "react-navigation"
import { createStackNavigator} from "react-navigation-stack"
import About from '../../About/About'
import Header from '../../shared/Header'
import WonderfulArrangements from "../../WonderfulArrangements/WonderfulArrangements"
import FlowersCollection from "../../FlowersCollection/FlowersCollection"
import FlowersOrder from "../../FlowersOrder/FlowersOrder"

const screens={
    Flowers:{
        screen:FlowersCollection,
        navigationOptions:({navigation})=> {
            return {
                headerTitle: () => <Header  navigation={navigation}/>
                // headerStyle:{backgroundColor:'#eee'}
            }
        }
    }
}
const FlowersStack=createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'#444',
        headerStyle:{backgroundColor:'#eee',height:110}
    }
});
export default FlowersStack;