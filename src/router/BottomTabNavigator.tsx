import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductScren from '../Screens/ProductScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeStack from './HomeStack';
import ShoppingCart from '../Screens/ShoppingCart';
import ShoppingCartStack from './ShoppingCartStack';
import MenuScreen from '../Screens/MenuScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#ffbd7d',
            tabBarInactiveTintColor: '#e47911',
            headerShown: false,
        }} >
            <Tab.Screen name="Home" component={HomeStack} options={{
                tabBarIcon: ({ color }) => (
                    <Entypo color={color} name='home' size={30} />
                ),
            }} />
            <Tab.Screen name="user" component={ProductScren} options={{
                tabBarIcon: ({ color }) => (
                    <Entypo color={color} name='user' size={30} />
                ),
            }} />
            <Tab.Screen name="ShoppingCart" component={ShoppingCartStack} options={{
                tabBarIcon: ({ color }) => (
                    <Entypo color={color} name='shopping-cart' size={30} />
                ),
            }} />
            <Tab.Screen name="MenuScreen" component={MenuScreen} options={{
                tabBarIcon: ({ color }) => (
                    <Entypo color={color} name='menu' size={30} />
                ),
            }} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;