import {createDrawerNavigator} from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import HomeStack from '../Routes/HomeStack'
import AboutStack from '../Routes/AboutStack'
import Home from '../Home'
import ArrangementsStack from '../Routes/ArrangementsStack'
import FlowersStack from '../Routes/FlowersStack'


const RootDrawerNavigator=createDrawerNavigator({

Home:{
    screen:HomeStack
},
About:{
    screen:AboutStack
},
Flowers:{
     screen:FlowersStack
},
Arrangements:{
    screen:ArrangementsStack
}

})
export default createAppContainer(RootDrawerNavigator)