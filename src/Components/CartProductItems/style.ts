import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    mainroot: {
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        marginVertical: 5
    },
    image: {
        flex: 2,
        height: 150,
        resizeMode: 'contain',
        // borderRadius: 10,
        // borderTopLeftRadius: 9,
        // borderBottomLeftRadius: 9
    },
    root: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        // borderWidth: 1,
        // borderColor: '#d1d1d1',
        // borderRadius: 10,
        // marginVertical:5

    },
    rightContainer: {
        padding: 10,
        // width:"60%",
        flex: 3
    },
    title: {
        fontSize: 18,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,

    },
    star: {
        margin: 2
    },
    oldprice: {
        fontSize: 12,
        fontWeight: 'normal',
        paddingLeft: 5,
        textDecorationLine: 'line-through',
    }
})

export default styles