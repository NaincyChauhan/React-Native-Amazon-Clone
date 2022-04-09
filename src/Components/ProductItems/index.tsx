import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './style'
import {useNavigation} from '@react-navigation/native'

interface ProductItemProps {
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

const ProductItem = (props: ProductItemProps) => {
    const { item } = props;
    const navigation = useNavigation();
    const OnPress = () => {
        navigation.navigate('ProductScreen',{id:item.id})
    }
    return (
        <TouchableOpacity style={styles.root} onPress={OnPress}>
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
                    from ${item.price.toFixed(2)}
                    {item.oldPrice && (<Text style={styles.oldprice}>  ${item.oldPrice.toFixed(2)}</Text>)}
                </Text>
            </View>
        </TouchableOpacity>
    )
}



export default ProductItem