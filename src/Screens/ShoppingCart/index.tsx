import React from 'react'
import { View, Text, FlatList, } from 'react-native'
import Button from '../../Components/Button'
import CartProductItem from '../../Components/CartProductItems'
import {useNavigation} from '@react-navigation/native'

import products from '../../data/cart'

const ShoppingCart = () => {
    const navigation = useNavigation()
    const totalPrice = products.reduce((summedPrice,product) => (summedPrice + product.item.price  * product.quantity),0)
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', padding: 10 }}>
            <View>
                <View><Text style={{fontSize:18,fontWeight:'bold'}}>SubTotal ({products.length} items) : <Text style={{color:'#e47911'}}>{totalPrice.toFixed(2)}</Text></Text></View>
                <Button text={'Proceed to checkout'} onPress={() => navigation.navigate("ShoppingCart", { screen: 'AddressScreen' })
                }  />
            </View>
            <FlatList
                data={products}
                renderItem={({ item, index }) =>
                    <CartProductItem cartItem={item} />
                }
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default ShoppingCart