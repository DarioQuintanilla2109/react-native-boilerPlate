import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//A tester screen with some inline styling
function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <Text style={{ color: 'green' }}>Home Screen</Text>
      </SafeAreaView>
    </View>
  )
}

//creating a stack navigator that will contain at least 1 screen
const HomeStack = createStackNavigator()

//component prop will take in screens you create
function HomeScreenStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={HomeScreen}></HomeStack.Screen>
    </HomeStack.Navigator>
  )
}

//STARTING POINT OF YOUR APP -> notice we are passing in our STACK NAVIGATOR
//NavigationContainer is responsible for bringing our parent most navigator to your device i.e. HomeScreeStack
function App() {
  return (
    <NavigationContainer>
      <HomeScreenStack />
    </NavigationContainer>
  )
}

export default App
