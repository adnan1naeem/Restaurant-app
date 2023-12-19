import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ImageAssets } from './ImageImports'
import { Colors } from '../Utils/Colors';

const SocialLoginContainer = ({ id }) => {
    let imageSource;
    if (id === 'google') {
        imageSource = ImageAssets.google;
    } else if (id === 'facebook') {
        imageSource = ImageAssets.facebook;
    } else {
        imageSource = ImageAssets.apple;
    }
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                source={imageSource}
                style={styles.Image}
            />
        </TouchableOpacity>
    )
}

export default SocialLoginContainer

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.halfWhite,
        width: 58,
        height: 58,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 29,
    },
    Image: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    }
})