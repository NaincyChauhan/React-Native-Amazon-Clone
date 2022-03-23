import React from 'react'
import { View, StyleSheet, FlatList, } from 'react-native'
import ProductItem from '../../Components/ProductItems'
import products from '../../data/products'


const HomeScreen = ({searchValue}:{searchValue:string}) => {
    console.log("this is home scrren",searchValue);
    
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', padding: 10 }}>
            <FlatList 
                data={products}
                renderItem={({ item, index }) => 
                    <ProductItem  item={item} />
                }
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default HomeScreen
