// In App.js in a new project

import React, { useEffect } from 'react'
import { View, Text, Button, TextInput, Image } from 'react-native'
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { MIAMI } from './src/images/ma'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
// function DetailsScreen({ route, navigation }) {
//   //getting params passed in
//   const { itemId, otherParam } = route.params

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//       <Button
//         title='Go to Details... again'
//         onPress={() =>
//           navigation.push('Details', {
//             itemId: Math.floor(Math.random() * 100),
//           })
//         }
//       />
//       <Button title='Go back' onPress={() => navigation.goBack()} />
//       <Button
//         title='Go back to first screen in stack'
//         onPress={() => navigation.popToTop()}
//       />
//     </View>
//   )
// }

//we get data passed in from route.params.nameOfObjectPassedIn

// function HomeScreen({ route, navigation }) {
//   const [count, setCount] = React.useState(0)

//   React.useLayoutEffect(() => {
//     navigation.setOptions({
//       headerRight: () => (
//         <Button onPress={() => setCount(c => c + 1)} title='Update count' />
//       ),
//     })
//   })

//   return (
//     <View>
//       <Button
//         onPress={() => {
//           navigation.navigate('CreatePost')
//         }}
//         title='createPost'
//       />
//       <Text>Count: {count}</Text>
//     </View>
//   )
// }

// function CreatePostScreen({ navigation, route }) {
//   const [postText, setPostText] = React.useState('')
//   //getting params passed in

//   return (
//     <>
//       <TextInput
//         multiline
//         placeholder="What's on your mind?"
//         style={{ height: 200, padding: 10, backgroundColor: 'white' }}
//         value={postText}
//         onChangeText={setPostText}
//       />

//       <Button
//         title='Done'
//         onPress={() => {
//           // Pass params back to home screen
//           navigation.navigate('Home', { post: postText })
//         }}
//       />
//     </>
//   )
// }

function LogoTitle() {
  return <Image style={{ width: 50, height: 50 }} source={MIAMI} />
}

// //2 properties getting returned, Screen, Navigator
// const Stack = createStackNavigator()

// function StackScreen() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name='Home'
//           component={HomeScreen}
//           options={{
//             headerTitle: props => <LogoTitle {...props} />,
//             headerLeft: props => (
//               <LogoTitle
//                 {...props}
//                 onPress={() => {
//                   navigation.navigate('CreateScreen')
//                 }}
//               />
//             ),
//           }}
//         />
//         <Stack.Screen
//           options={{
//             headerTitle: props => <LogoTitle {...props} />,
//             headerBackTitle: ' ',
//             headerBackImage: props => <LogoTitle />,
//           }}
//           name='CreatePost'
//           component={CreatePostScreen}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }
///////////////////////////////////////////////////////////////////////////////////////

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
  const MyDarkTheme = {
    dark: true,
    colors: {
      primary: '#9933ff',
      background: '#00023',
      card: '#000028',
      text: '#ffffff',
      border: '#000028',
      notification: '#9933ff',
    },
  }
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootStack.Navigator mode='modal' headerMode='none'>
        <RootStack.Screen name='Main' component={MainStackScreen} />
        <RootStack.Screen name='MyModal' component={ModalScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default App
