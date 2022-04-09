import { DataStore } from 'aws-amplify';
import React from 'react'
import { Text, View, Image } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { CartProduct } from '../../models';
import QuantitySelector from '../QuantitySector';
import styles from './style'

interface CartProductItemProps {
    cartItem: CartProduct
}

const CartProductItem = ({ cartItem }: CartProductItemProps) => {

    const { product, ...cartProduct } = cartItem;
    const updateQuantity = async (newQuantity: number) => {
        const original = await DataStore.query(CartProduct, cartProduct.id);
        await DataStore.save(
            CartProduct.copyOf(original, updated => {
                updated.quantity = newQuantity;
            })
        )
    }
    return (
        <View style={styles.mainroot}>
            <View style={styles.root}>
                <Image style={styles.image} source={{ uri: product.image }} />
                <View style={styles.rightContainer}>
                    <Text style={styles.title} numberOfLines={3}>{product.title}</Text>
                    {/* Rating */}
                    <View style={styles.ratingContainer}>
                        {
                            [0, 0, 0, 0, 0].map((_value, index) => (
                                <FontAwesome key={`${product.id}-${index}`} style={styles.star} name={index < Math.floor(product.avgRating) ? 'star' : 'star-o'} size={18} color="#e47911" />
                            ))
                        }
                        <Text>{product.ratings}</Text>
                    </View>
                    <Text style={styles.price}>
                        from ${product.price}
                        {product.oldPrice && (<Text style={styles.oldprice}>  ${product.oldPrice}</Text>)}
                    </Text>
                </View>

            </View>
            <View style={{ margin: 5 }}>
                <QuantitySelector quantity={cartProduct.quantity} setquantity={updateQuantity} />
            </View>

        </View>
    )
}



export default CartProductItem

