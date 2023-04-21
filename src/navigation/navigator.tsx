import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import AddDirScreen from '../screens/AddDirScreen'

const Stack = createNativeStackNavigator()

export const Navigator = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home' component={HomeScreen} options={{ headerShown: false }}
      />
      <Stack.Screen
        name='AddDir' component={AddDirScreen} options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
