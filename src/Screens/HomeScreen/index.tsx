import React from 'react'
import { View, StyleSheet, FlatList, Text, } from 'react-native'
import ProductItem from '../../Components/ProductItems'
// import products from '../../data/products'
import { DataStore, } from 'aws-amplify'
import { Product } from '../../models'


const HomeScreen = ({ searchValue }: { searchValue: string }) => {

    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        DataStore.query(Product).then(setProducts)
    }, [])
    return (
        <View style={[{ flex: 1, backgroundColor: '#fff', padding: 10 }]}>            
            <FlatList
                data={products}
                renderItem={({ item, index }) =>
                    <ProductItem item={item} />
                }
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{

    }
})

export default HomeScreen
