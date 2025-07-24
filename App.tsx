import { View, Text, Button, SafeAreaView, Platform } from 'react-native'
import React from 'react'
import { appEvents } from './events/appEvents'
import Routes from './src/Navigations/Routes'

const App = () => {
  const onSignUp = async () => {
    try {
      await appEvents("signup", {
        email: "testuser@gmail.com",
        userName: "TestUser",
      })

    } catch (error) {
      console.log('error', error)
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, 
    }}>
      <Routes/>
      {/* <View style={{ flex: 1, borderWidth: 1, 
        marginTop: Platform.OS === 'android' ? 40 : 0, paddingHorizontal:10 }}>

        <Text style={{ color: "white", fontSize: 20 }}>App 12121</Text>
        <View style={{ justifyContent: 'center', alignItems: 'center', }}>

          <Button title='SIgnup' onPress={onSignUp}  />
        </View>
      </View> */}
    </SafeAreaView>
  )
}

export default App