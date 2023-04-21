import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Navigator } from './src/navigation/navigator'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App (): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar style='auto' />
        <Navigator />
      </SafeAreaProvider>
    </NavigationContainer>
  )
}
