import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Button from '../../Components/Button'
import { Auth } from 'aws-amplify'

const MenuScreen = () => {
    const onLogout = () => {
        Auth.signOut();
    }
  return (
    <View>
     <Button text='Sign Out' onPress={onLogout} />
    </View>
  )
}

export default MenuScreen