import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface qunantitySelector{
    quantity:number,
    setquantity:any
}

function QuantitySelector({quantity,setquantity}:qunantitySelector) {
    const onMinus = () => {
        console.log("onminus");
        
        setquantity(Math.max(0,quantity - 1))
    }

    const onPuls = () => {
        console.log("onplus");
        setquantity(quantity + 1)
    }
    return (
        <View style={styles.root}>
            <TouchableOpacity style={styles.button} onPress={onMinus}>
                <Text> - </Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity style={styles.button}  onPress={onPuls}>
                <Text style={styles.buttonText}> + </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderWidth:1,
        borderColor:'#e3e3e3',
        width:100,
    },
    button: {
        width:25,
        height:25,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#d1d1d1'
    }, 
    buttonText: {
        fontSize:18,
    },
    quantity: {
        color:'#007eb9'
    },
})
export default QuantitySelector