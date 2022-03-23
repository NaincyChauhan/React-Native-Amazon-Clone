import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

interface ButtonProps{
    text:string,
    onPress:() => void
}
const Button = ({text,onPress}:ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.root}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    root:{
        backgroundColor:'#e47911',
        marginVertical:10,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#a15elb',
    },
    text:{
        fontSize:16,
    },
})

export default Button