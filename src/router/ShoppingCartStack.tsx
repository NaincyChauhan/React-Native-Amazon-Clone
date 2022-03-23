import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddressScreen from '../Screens/AddScreen';
import ShoppingCart from '../Screens/ShoppingCart';

const Stack = createNativeStackNavigator();


const ShoppingCartStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="cart" options={{ headerShown: false }} component={ShoppingCart} />
            <Stack.Screen name="AddressScreen" options={{ headerShown: false }} component={AddressScreen} />
        </Stack.Navigator>
    )
}

export default ShoppingCartStack

