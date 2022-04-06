import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useColorScheme } from 'react-native-appearance'
import DT from './darkTheme'

//A tester screen
function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <Text style={{ color: 'white' }}>Home Screen</Text>
      </SafeAreaView>
    </View>
  )
}

//creating a stack navigator that will contain at least 1 screen
const HomeStack = createStackNavigator()

//component prop will take in screens you create
function HomeScreenStack({ navigation }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={HomeScreen}></HomeStack.Screen>
    </HomeStack.Navigator>
  )
}

//STARTING POINT OF YOUR APP -> notice we are passing in our STACK NAVIGATOR
function App() {
  const scheme = useColorScheme()
  const MyDarkTheme = DT()

  return (
    <NavigationContainer theme={scheme === 'dark' ? MyDarkTheme : DefaultTheme}>
      <HomeScreenStack />
    </NavigationContainer>
  )
}

export default App
