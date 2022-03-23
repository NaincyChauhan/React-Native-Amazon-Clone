import React from 'react'
import { Text, View, Image } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../QuantitySector';
import styles from './style'

interface CartProductItemProps {
    cartItem: {
        id: string,
        quantity: number,
        option?: string,
        item: {
            id: string;
            title: string;
            image: string;
            avgRating: number;
            ratings: number;
            price: number;
            oldPrice?: number;
        }
    }
}

const CartProductItem = ({ cartItem }: CartProductItemProps) => {
    const { item, quantity: QuantityProp } = cartItem;
    const [quantity, setQuantity] = React.useState(0)
    return (
        <View style={styles.mainroot}>
            <View style={styles.root}>
                <Image style={styles.image} source={{ uri: item.image }} />
                <View style={styles.rightContainer}>
                    <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
                    {/* Rating */}
                    <View style={styles.ratingContainer}>
                        {
                            [0, 0, 0, 0, 0].map((_value, index) => (
                                <FontAwesome key={`${item.id}-${index}`} style={styles.star} name={index < Math.floor(item.avgRating) ? 'star' : 'star-o'} size={18} color="#e47911" />
                            ))
                        }
                        <Text>{item.ratings}</Text>
                    </View>
                    <Text style={styles.price}>
                        from ${item.price}
                        {item.oldPrice && (<Text style={styles.oldprice}>  ${item.oldPrice}</Text>)}
                    </Text>
                </View>        
                        
            </View>
            <View style={{margin:5}}>
                <QuantitySelector quantity={quantity} setquantity={setQuantity} />
            </View>

        </View>
    )
}



export default CartProductItem