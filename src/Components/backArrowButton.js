import { StyleSheet, Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ImageAssets } from './ImageImports'

const BackArrowButton = ({ navigation, style }) => {
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={ImageAssets.backArrow} style={[style,styles.backArrow]} />
        </TouchableOpacity>
    )
}

export default BackArrowButton

const styles = StyleSheet.create({
    backArrow: {
        height: 25,
        width: 30,
    }
})