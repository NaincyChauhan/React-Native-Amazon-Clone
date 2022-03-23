import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    root:{
        padding:10,
        backgroundColor:'white',
        flex:1
    },
    title:{
        fontSize:18,
        fontWeight:'bold'
    },
    oldprice: {
        fontSize: 12,
        fontWeight: 'normal',
        paddingLeft: 5,
        textDecorationLine: 'line-through',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    descripation:{
        marginVertical:10,
        lineHeight:20,
        fontSize:17
    },
    
})

export default styles;