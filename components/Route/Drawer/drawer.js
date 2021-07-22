import {createDrawerNavigator} from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import HomeStack from '../Routes/HomeStack'
import AboutStack from '../Routes/AboutStack'
import ArrangementsStack from '../Routes/ArrangementsStack'
import FlowersStack from '../Routes/FlowersStack'
import LoginStack from '../Routes/LoginStack'

import RegisterStack from '../Routes/RegisterStack'
import Register from '../../shared/Register'



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
},
Register:{
   screen:RegisterStack
},
Login:{
    screen: LoginStack
},


})
export default createAppContainer(RootDrawerNavigator)