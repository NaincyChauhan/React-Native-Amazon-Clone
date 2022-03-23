import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();


const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
                <Stack.Screen name="products" options={{headerShown:false}} component={BottomTabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router

const styles = StyleSheet.create({})