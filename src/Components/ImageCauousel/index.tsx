import { View, Text, FlatList, useWindowDimensions, Image, StyleSheet } from 'react-native'
import React from 'react'

const ImageCarousel = ({ images }: { images: [string] }) => {
    const windowWidth = useWindowDimensions().width;
    const [activeindex, setActiveindex] = React.useState(0)
    const onFlatListUpdate = React.useCallback(({viewableItems}) => {
        if(viewableItems > 0){
            setActiveindex(viewableItems[0].index || 0)
        }
    },[]);
    return (
        <View style={styles.root}>
            <FlatList
                data={images}
                renderItem={({ item }) => (
                    <Image style={[styles.image, { width: windowWidth - 40 }]} source={{ uri: item }} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={windowWidth - 20}
                snapToAlignment={'center'}
                decelerationRate={'fast'}
                // viewabilityConfig={{
                //     viewAreaCveragePercentThreashold:50,
                // }}
                // onViewableItemsChanged={onFlatListUpdate}
            />
            <View style={styles.dots}>
                {images.map((image, index) =>
                    <View style={[styles.dot,{backgroundColor:index === activeindex ? '#c9c9c9' : '#ededed'}]} key={index} />
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
    },
    image: {
        margin: 10,
        height: 250,
        resizeMode: 'contain',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#c9c9c9',
        backgroundColor: '#ededed',
        margin: 5
    },
    dots: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
})

export default ImageCarousel