import * as React from 'react' 
import { Text, View } from 'react-native'

import GirlScreen from './GirlScreen'
import BoyScreen from './BoyScreen'


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();


const HomeScreen: React.FC = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen 
    name = "Đinh Trường" 
    options = {{tabBarIcon: () => <Text> 👦 </Text>}}
    component={BoyScreen} />
    <Tab.Screen 
    name = "Thùy Linh " 
    options = {{tabBarIcon: () => <Text> 👩‍🦰 </Text>}}
    component={GirlScreen} />
    
  </Tab.Navigator>
  )
}

export default HomeScreen
