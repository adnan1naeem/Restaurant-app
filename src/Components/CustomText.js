import { StyleSheet, Text, } from 'react-native'
import React from 'react'
import { Fonts } from './fonts'

const CustomText = ({ title, customStyle }) => {
    return (
        <Text style={[styles.textConatiner, customStyle]}>{title}</Text>
    )
}
export default CustomText
const styles = StyleSheet.create({
    textConatiner: {
        fontFamily: Fonts.SemiBold,
        fontSize: 32
    }
})