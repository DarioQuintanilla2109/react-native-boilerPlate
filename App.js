import React from 'react'
import { View, Text, Button } from 'react-native'
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import DT from './darkTheme'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
      <Button
        onPress={() => navigation.navigate('MyModal')}
        title='Open Modal'
      />
      <Button
        onPress={() => navigation.navigate('Details')}
        title='Details Screen'
      />
    </View>
  )
}

function ModalScreen({ navigation }) {
  const { colors } = useTheme()
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontSize: 30, color: colors.text }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title='Dismiss' />
    </View>
  )
}

function DetailsScreen() {
  return (
    <View>
      <Text>Details</Text>
    </View>
  )
}

const MainStack = createStackNavigator()
const RootStack = createStackNavigator()

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name='Home' component={HomeScreen} />
      <MainStack.Screen name='Details' component={DetailsScreen} />
    </MainStack.Navigator>
  )
}

function App() {
  const scheme = useColorScheme()
  const MyDarkTheme = DT()

  return (
    <NavigationContainer theme={scheme === 'dark' ? MyDarkTheme : DefaultTheme}>
      <RootStack.Navigator mode='modal' headerMode='none'>
        <RootStack.Screen name='Main' component={MainStackScreen} />
        <RootStack.Screen name='MyModal' component={ModalScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default App
